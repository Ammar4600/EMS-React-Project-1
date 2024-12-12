

export function setlocalstorage() {
  const employee = [
    {
      "role": "employee",
      "name": "Ammar ",
      "email": "e1@1.com",
      "password": "123",
      "userimage": "https://plus.unsplash.com/premium_photo-1676736592730-bfd847c0c8c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym95fGVufDB8fDB8fHww",
      "taskreport": {
        "completed": 0,
        "failed": 0,
        "inprogress": 0,
        "total": 0
      },
      "tasks": []
    },
    {
      "role": "employee",
      "name": "Saad",
      "email": "e2@2.com",
      "password": "123",
      "userimage": 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95fGVufDB8fDB8fHww',
      "taskreport": {
        "completed": 0,
        "failed": 0,
        "inprogress": 0,
        "total": 0
      },
      "tasks": [
     
      ]
    },
    {
      "role": "employee",
      "name": "Maryam",
      "email": "e3@3.com",
      "password": "123",
      "userimage": "https://plus.unsplash.com/premium_photo-1669704098876-2a38eb10e56a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFyeWFtfGVufDB8fDB8fHwwS",
      "taskreport": {
        "completed": 0,
        "failed": 0,
        "inprogress": 0,
        "total": 0
      },
      "tasks": [
  
      ]
    }
  ];

  const admin = {
    "role": "admin",
    "name": "Ammar",
    "email": "a@a.com",
    "password": "123",
    "userimage": "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
  };

  if (!localStorage.getItem('employee') && !localStorage.getItem('admin')) {
    localStorage.setItem('employee', JSON.stringify(employee));
    localStorage.setItem('admin', JSON.stringify(admin));
    console.log('localStorage initialized');
  }
}