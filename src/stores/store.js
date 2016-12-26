// import { reducer } from '../reducers/reduce';
import reducer from '../reducers/reduce';
import { createStore } from 'redux';
const initState = {
  'topic_1': {
    'contentRef': {
      'rev_1': [
        'boring_1482479979065',
        'boring_1482479980291',
        'boring_1482479981457',
        'boring_1482479982672',
        'boring_1482479984030'
      ],
      'rev_2': [
        'boring_1482479979065',
        'boring_1482479980291',
        'boring_1482479993352'
      ],
      'rev_3': [
        'boring_1482479979065',
        'boring_1482479980291',
        'boring_1482479981457',
        'boring_1482480019370'
      ],
      'rev_4': [
        'boring_1482479979065',
        'boring_1482479980291',
        'boring_1482480062159'
      ]
  },
  'contents': {
      'boring_1482479979065': {
        'id': 1482479979065,
        'text': '111'
      },
      'boring_1482479980291': {
        'id': 1482479980291,
        'text': '2222'
      },
      'boring_1482479981457': {
        'id': 1482479981457,
        'text': '333'
      },
      'boring_1482479982672': {
        'id': 1482479982672,
        'text': '4444'
      },
      'boring_1482479984030': {
        'id': 1482479984030,
        'text': '555'
      },
      'boring_1482479993352': {
        'id': 1482479993352,
        'text': '66666'
      },
      'boring_1482480019370': {
        'id': 1482480019370,
        'text': 'dasdsa'
      },
      'boring_1482480062159': {
        'id': 1482480062159,
        'text': 'asdasdasd'
      }
    },
    'id': 1,
    'title': 'topic 1'
  },

  'topic_2': {
    'contentRef': {
      'rev_1': [
        'boring_1482479979065',
        'boring_1482479980291',
        'boring_1482479981457',
        'boring_1482479982672',
        'boring_1482479984030'
      ],
      'rev_2': [
        'boring_1482479979065',
        'boring_1482479980291',
        'boring_1482479993352'
      ],
      'rev_3': [
        'boring_1482479979065',
        'boring_1482479980291',
        'boring_1482479981457',
        'boring_1482480019370'
      ],
      'rev_4': [
        'boring_1482479979065',
        'boring_1482479980291',
        'boring_1482480062159'
      ]
  },
  'contents': {
      'boring_1482479979065': {
        'id': 1482479979065,
        'text': 'topic_2'
      },
      'boring_1482479980291': {
        'id': 1482479980291,
        'text': 'topic_2'
      },
      'boring_1482479981457': {
        'id': 1482479981457,
        'text': 'topic_2'
      },
      'boring_1482479982672': {
        'id': 1482479982672,
        'text': 'topic_2'
      },
      'boring_1482479984030': {
        'id': 1482479984030,
        'text': 'topic_2'
      },
      'boring_1482479993352': {
        'id': 1482479993352,
        'text': 'topic_2'
      },
      'boring_1482480019370': {
        'id': 1482480019370,
        'text': 'topic_2'
      },
      'boring_1482480062159': {
        'id': 1482480062159,
        'text': 'topic_2'
      }
    },
    'id': 2,
    'title': 'topic 2'
  }

}
export const store = createStore(reducer, initState);

