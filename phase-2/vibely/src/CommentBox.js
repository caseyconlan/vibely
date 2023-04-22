import React, { useState } from "react";

function CommentBox() {
const [comment, setComment] = useState("");

function handleSubmit(event) {
event.preventDefault();
console.log(comment);
setComment("");
}

return (
<div>
<form onSubmit={handleSubmit}>
<label>
Comment:
<input
type="text"
value={comment}
onChange={(e) => setComment(e.target.value)}
/>
</label>
<input type="submit" value="Submit" />
</form>
</div>
);
}

export default CommentBox;