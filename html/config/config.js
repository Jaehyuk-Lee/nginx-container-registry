const WAS_IP = '192.168.111.21';

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
