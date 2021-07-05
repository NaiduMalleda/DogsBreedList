import { userConstants } from '../_constants';

const breeds = [
  {
    "id": 1,
    "name": "Affenpinscher",
     "description": "This breed is an Afhanpinscher"
  },
  {
    "id": 2,
    "name": "Afghan Hound",
    "description": "This breed is an Afghan Hound"
  },
  {
    "id": 3,
    "name": "African Hunting Dog",
    "description": "This breed is an African Hunting Dog"
  },
  {
    "id": 4,
    "name": "Airedale Terrier",
    "description": "This breed is an Airedale Terrier"
  },
  {
    "id": 5,
    "name": "Akbash Dog",
    "description": "This breed is an Akbsh Hound"
  },
  {
    "id": 6,
    "name": "Akita",
    "description": "This breed is an Akita"
  },
  {
    "id": 7,
    "name": "Alapaha Blue Blood Bulldog",
    "description": "This breed is an Alapaha Blue Blood Bulldog"
  },
  {
    "id": 8,
    "name": "Alaskan Husky",
    "description": "This breed is an Alaskan Husky"
  },
  {
    "id": 9,
    "name": "Alaskan Malamute",
    "description": "This breed is an Afghan Hound"
  },
  {
    "id": 10,
    "name": "American Bulldog",
    "description": "This breed is an American Bulldog"
  },
  {
    "id": 11,
    "name": "American Bully",
    "description": "This breed is an American Bully"
  },
  {
    "id": 12,
    "name": "American Eskimo Dog",
    "description": "This breed is an American Eskimo Dog"
  },
  {
    "id": 13,
    "name": "American Eskimo Dog (Miniature)",
    "description": "This breed is an American Eskimo Dog (Miniature)"
  },
  {
    "id": 14,
    "name": "American Foxhound",
    "description": "This breed is American Foxhound"
  },
  {
    "id": 15,
    "name": "American Pit Bull Terrier",
    "description": "This breed is an American Pit Bull Terrier"
  },
  {
    "id": 16,
    "name": "American Staffordshire Terrier",
    "description": "This breed is an American Staffordshire Terrier"
  },
  {
    "id": 17,
    "name": "American Water Spaniel",
    "description": "This breed is an American Water Spaniel"
  },
  {
    "id": 18,
    "name": "Anatolian Shepherd Dog",
    "description": "This breed is an Anatolian Shepherd Dog"
  },
  {
    "id": 19,
    "name": "Appenzeller Sennenhund",
    "description": "This breed is an Appenzeller Sennenhund"
  },
  {
    "id": 20,
    "name": "Australian Cattle Dog",
    "description": "This breed is an Australian Cattle Dog"
  }
];
export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case userConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };
    case userConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };
    default:
      return state
  }
}