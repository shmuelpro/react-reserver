export const barData = [
  {
    draggable: true,
    id: 'xx',
    length: 13,
    row: 2,
    column: 8,
    className: 'default-bar',
    children: 'This is a tag'
  },
  { id: 'xy', length: 4, row: 5, column: 12, style: { background: 'red' } }
]

export const preMadeReservations = [
  {
    id: 1,
    start: '29-07-2020',
    end: '04-08-2020',
    guestName: 'Trevor Mathis',
    roomId: 4
  },
  {
    id: 3,
    start: '03-08-2020',
    end: '11-08-2020',
    guestName: 'Nell McKinney',
    roomId: 10
  },
  {
    id: 4,
    start: '30-07-2020',
    end: '01-09-2020',
    guestName: 'Max Lindsey',
    roomId: 11
  },
  {
    id: 2,
    start: '15-08-2020',
    end: '02-09-2020',
    guestName: 'Ollie Sherman',
    roomId: 10
  }
]

export const projectUnits = [
  {
    id: 1,
    type: 'full',
    to: 2,
    from: 4,
    start: '26-04-2019',
    end: '28-04-2019',
    img: '32.jpg',
    text: 'Reach out to potention guest speakers',
    row: 3
  },
  {
    id: 2,
    type: 'empty',
    from: 1,
    start: '28-04-2019',
    end: '30-04-2019',
    img: '46.jpg',
    title: 'Propose 3 conference keynotes',
    subtitle: 'Due Today',

    row: 5
  },
  {
    id: 4,
    type: 'empty',
    to: 1,
    start: '27-04-2019',
    end: '01-05-2019',
    img: '46.jpg',
    title: 'Propose 3 conference keynotes',
    subtitle: 'Due Today',

    row: 8
  }
]

export const hotelReservations = [
  {
    id: 563,
    start: '26-04-2019',
    end: '28-04-2019',
    name: 'Jorge Vega',
    row: 3
  },
  {
    id: 9901,
    start: '28-04-2019',
    end: '30-04-2019',
    name: 'Trevor Mathis',
    row: 5
  },
  {
    id: 1234,

    start: '27-04-2019',
    end: '01-05-2019',
    name: 'Clifford Campbell',
    row: 8
  }
]

export const rooms = {
  4: { id: 4, name: 'Deluxe', hosts: '4 People', row: 3 },
  10: { id: 10, name: 'Basic', hosts: '2 People', row: 8 },
  11: { id: 11, name: 'Basic', hosts: '2 People', row: 6 }
}

export const names = [
  'Max Lindsey',
  'Jesus Myers',
  'Julian Norton',
  'Nell McKinney',
  'Trevor Mathis',
  'Virginia Parsons',
  'Ollie Sherman',
  'Beulah McBride',
  'Sylvia Griffin',
  'Jordan Holland',
  'Elsie Schwartz',
  'Leon Harrington',
  'Jorge Vega',
  'Lina Lucas',
  'George Daniel',
  'Douglas Simmons',
  'Mary Willis',
  'Jacob Stone',
  'James Greer',
  'Luke Foster',
  'Nell Dunn',
  'Lily Wallace',
  'Leonard Glover',
  'Francis Hodges',
  'Clifford Campbell'
]

export const hebnames = ['אבגיל', 'אביאור', 'אביאל', 'אליעד', 'אליאל']
