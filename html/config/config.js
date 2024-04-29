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
        'name',
        'residentRegistrationNumber',
        'contactNumber',
        'address',
        'email',
        'userID',
      ],
    method: 'POST',
  }
};
