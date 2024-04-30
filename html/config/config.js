const WAS_IP = 'localhost';

const TYPE_INFO = {
  search: {
    params: [
      'name',
    ],
    method: 'GET',
  },
  searchUserID: {
    params: [
      'userID',
    ],
    method: 'GET',
  },
  update: {
    params:
      [
        'userID',
        'name',
        'residentRegistrationNumber',
        'contactNumber',
        'address',
        'email',
      ],
    method: 'POST',
  },
  insert: {
    params:
      [
        'userID',
        'name',
        'residentRegistrationNumber',
        'contactNumber',
        'address',
        'email',
      ],
    method: 'POST',
  },
  delete: {
    params:
      [
        'userID',
      ],
    method: 'POST',
  },
};
