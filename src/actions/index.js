export const CREATE_TOPIC = 'CREATE_TOPIC'
export const NEW_REV = 'NEW_REV'
export const ADD_CONTENT = 'ADD_CONTENT'
export const MODIFY_REV = 'MODIFY_REV'
export function createTopic (topicId, title) {
  return {
    type: CREATE_TOPIC,
    topicId,
    title
  }
}

export function newRev (topicId, originRev, originContentId, rev) {
  return {
    type: NEW_REV,
    topicId,
    rev,
    originRev,
    originContentId
  }
}

export function addContent (topicId, userId, contentId, text, rev) {
  return {
    type: ADD_CONTENT,
    rev,
    text,
    userId,
    topicId,
    contentId
  }
}


export function addIdea (text) {
  return {
    type: 'ADD',
    text
  }
}

