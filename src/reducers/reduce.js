// import { combineReducers } from 'redux'
import { CREATE_TOPIC, NEW_REV, ADD_CONTENT } from '../actions'
/*test
$r.store.dispatch({type: 'CREATE_TOPIC', topicId:88, title: "ccc"})
$r.store.dispatch({type: 'ADD_CONTENT', topicId:88, userId: 'boring', contentId: '1', text: 'cccc', rev: 'rev1'})
$r.store.dispatch({type: 'ADD_CONTENT', topicId:88, userId: 'boring', contentId: '2', text: 'cccc', rev: 'rev1'})
$r.store.dispatch({type: 'ADD_CONTENT', topicId:88, userId: 'boring', contentId: '3', text: 'cccc', rev: 'rev1'})
$r.store.dispatch({type: 'ADD_CONTENT', topicId:88, userId: 'boring', contentId: '4', text: 'cccc', rev: 'rev1'})
$r.store.dispatch({type: 'ADD_CONTENT', topicId:88, userId: 'boring', contentId: '5', text: 'cccc', rev: 'rev1'})
$r.store.dispatch({type: 'ADD_CONTENT', topicId:88, userId: 'boring', contentId: '6', text: 'cccc', rev: 'rev1'})
$r.store.dispatch({type: 'ADD_CONTENT', topicId:88, userId: 'boring', contentId: '7', text: 'cccc', rev: 'rev1'})

$r.store.dispatch({type: 'NEW_REV', topicId:88, originRev:'rev1', originContentId: 'boring_5', rev: 'rev2'})
$r.store.dispatch({type: 'ADD_CONTENT', topicId:88, userId: 'boring', contentId: '8', text: 'dddd', rev: 'rev2'})

$r.store.dispatch({type: 'NEW_REV', topicId:88, originRev:'rev1', originContentId: 'boring_2', rev: 'rev3'})
$r.store.dispatch({type: 'ADD_CONTENT', topicId:88, userId: 'boring', contentId: '9', text: 'eeee', rev: 'rev3'})

$r.store.getState()
*/
function topics (state = {}, action) {
  switch (action.type) {
    case CREATE_TOPIC:
      return {
        id: action.topicId,
        title: action.title,
        contents: {},
        contentRef: {}
      }

    case ADD_CONTENT:
      const contentId = `${action.userId}_${action.contentId}`
      if (!state.contents[contentId]) {
        const newcontentRef = addContentToContentRef(state.contentRef, action)
        state = Object.assign({}, state, { contentRef: newcontentRef })
      }

      //new contents
      const newContents = contents(state.contents, action)
      return Object.assign({}, state, { contents: newContents })

    case NEW_REV:
      const newRef = newRev({rev: action.originRev, contentId: action.originContentId}, state.contentRef, action)
      return Object.assign({}, state, {contentRef: newRef})

    default:
      return state;
  }
}

// export function topics (state = {}, action) {
//   const id = `topic_${action.topicId}`;
//   switch (action.type) {
//     case CREATE_TOPIC:
//       if (state[id]) {
//         return state
//       }
//       return Object.assign({}, state, {
//         [id]: {
//           id: id,
//           title: action.title,
//           contents: {},
//           contentRef: {}
//         }})

//     case ADD_CONTENT:
//       if (!state[id]) {
//         return state
//       }
//       state = Object.assign({}, state)
//       //add to ref
//       const contentId = `${action.userId}_${action.contentId}`
//       if (!state[id]["contents"][contentId]) {
//         state[id]["contentRef"] = addContentToContentRef(state[id]["contentRef"], action)
//       }

//       //add to contents
//       const newContents = contents(state[id]["contents"], action)
//       state[id]["contents"] = newContents

//       return state;

//     case NEW_REV:
//     default:
//       return state;
//   }
// }

function newRev (originObj, state, action) {
  const rev = action.rev

  const originRev = originObj.rev
  const originContentId = originObj.contentId
  const originRefArr = state[originRev]

  const newRefArr = originRefArr.slice(0, originRefArr.indexOf(originContentId))
  state[rev] = newRefArr
  return state

}

function addContentToContentRef (state, action) {
  switch (action.type) {
    case ADD_CONTENT:
      const rev = action.rev
      const contentId = `${action.userId}_${action.contentId}`
      state[rev] = state[rev] || []
      return Object.assign({}, state, {[rev]: [...state[rev], contentId]})
  }
}

function contents (state, action) {
  switch (action.type) {
    case ADD_CONTENT:
      const contentId = `${action.userId}_${action.contentId}`
      if (state[contentId]) {
        return state
      }
      return Object.assign({}, state, {
        [contentId]: {
          id: action.contentId,
          text: action.text
        }
      })
    default:
      return state
  }
}


export function reducer (state = {ideas: []}, action) {
  switch(action.type) {
    case 'ADD':
      return Object.assign({}, state, {ideas: [...state.ideas, action.text]});
    default:
      return state;
  }
}

export default function (state = {}, action) {
  const { topicId } = action
  if (typeof topicId === 'undefined') {
    return state
  }
  const newTopicId = `topic_${topicId}`
  return Object.assign({}, state, {[newTopicId]: topics(state[newTopicId], action)})
}
