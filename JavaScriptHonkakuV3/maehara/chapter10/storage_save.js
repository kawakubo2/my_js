const storage = localStorage;

const employee = {name: '山田太郎', age: 38,
    working_hours: {4: 180, 5: 172, 6: 150}
}

storage.setItem('employee', JSON.stringify(employee));