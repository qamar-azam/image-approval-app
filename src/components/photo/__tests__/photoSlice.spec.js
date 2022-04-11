import photoReducer, { approvedImage } from './photoSlice';

const photo = [
  {
    id: '8U5Nj6iIWLo',
    urls: {
      raw: 'https://images.unsplash.com/photo-1603629406262-dd1f961273f9?ixid=MnwzMTgzMDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDk2NzAxNjg&ixlib=rb-1.2.1',
      full: 'https://images.unsplash.com/photo-1603629406262-dd1f961273f9?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMTgzMDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDk2NzAxNjg&ixlib=rb-1.2.1&q=85',
      regular:
        'https://images.unsplash.com/photo-1603629406262-dd1f961273f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTgzMDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDk2NzAxNjg&ixlib=rb-1.2.1&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1603629406262-dd1f961273f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTgzMDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDk2NzAxNjg&ixlib=rb-1.2.1&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1603629406262-dd1f961273f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTgzMDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDk2NzAxNjg&ixlib=rb-1.2.1&q=80&w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1603629406262-dd1f961273f9'
    }
  }
];

describe('photo reducer', () => {
  const initialState = {
    selected: [],
    randomPhoto: [],
    loading: true
  };
  it('should handle initial state', () => {
    expect(photoReducer(undefined, { type: 'unknown' })).toEqual({
      selected: [],
      randomPhoto: [],
      loading: true
    });
  });

  it('should handle approved image', () => {
    const actual = photoReducer(initialState, approvedImage(photo));
    expect(actual.selected.length).toEqual(1);
  });
});
