class FakeDb{

  burgers = [{
    id: 123,
    name: 'lil-guy',
    size: 'small',
  },{
    id: 456,
    name: 'regular-degular',
    size: 'medium'
  },{
    id: 789,
    name: 'big-ol-boy',
    size: 'large'
  }]
}

export const fakeDb = new FakeDb()