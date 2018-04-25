import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}
const boundAddComment = text => dispatch(addComment(text));


function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}
const boundRemoveComment = id => dispatch(removeComment(id));

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}
const boundEditComment = (id, text) => dispatch(editComment(id, text));

function thumbUpComment (id, thumbs) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        thumbs: ++thumbs
    }
}
const boundThumbUpComment = (id, thumbs) => dispatch(thumbUpComment(id, thumb));

function thumbDownComment (id, thumbs) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        thumbs: --thumbs
    }
}
const boundThumbDownComment = (id, thumbs) => dispatch(thumbDownComment(id, thumb));
