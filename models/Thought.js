const mongoose = require("mongoose");
const ReactionSchema = require("./Reaction");
const { Schema } = mongoose;

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (timestamp) {
      return dayjs(timestamp).format("dddd, MMMM D, YYYY");
    },
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [ReactionSchema],
});

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = mongoose.model("Thought", ThoughtSchema);

module.exports = Thought;
