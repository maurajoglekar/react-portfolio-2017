import classification from './classification';

export default [
  {
    id: 'name',
    label: 'Name',
    show: true,
    sample: 'Big Sick',
    align: 'left',
  },
  {
    id: 'year',
    label: 'Year',
    type: 'year',
    show: true,
    sample: 2017,
  },
  {
    id: 'genre',
    label: 'Genre',
    type: 'suggest',
    options: classification.genres, 
    show: true,
    sample: 'Action',
    align: 'left',
  },
  {
    id: 'rating',
    label: 'Rating',
    type: 'rating',
    show: true,
    sample: 3,
  },
  {
    id: 'comments',
    label: 'Comments',
    type: 'text',
    sample: 'nice date movie',
  }
]

