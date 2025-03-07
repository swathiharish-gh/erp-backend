import connector from "#models/databaseUtil";

const activitySchema = {
  activityBlueprint: { type: connector.Schema.Types.ObjectId, ref: "ActivityBlueprint", required: true },
  startTime: { type: Date, required: true },
  duration: { type: Number, required: true },
  course: { type: connector.Schema.Types.ObjectId, ref: "Course", required: true },
  faculty: { type: connector.Schema.Types.ObjectId, ref: "Faculty", required: true },
  type: {
    type: String,
    required: true,
    enum: ["LECTURE", "PRACTICAL", "TUTORIAL"],
  },
  task: [{
    type: connector.Schema.Types.ObjectId,
    ref: ["Topic", "Practical", "Tutorial"],
    required: true,
  }],
  group: { type: connector.Schema.Types.ObjectId, ref: "Group", required: true },
  students: [{ type: connector.Schema.Types.ObjectId, ref: "Student", required: true }],
};

// eslint-disable-next-line  no-unused-vars
const Activity = connector.model("Activity", activitySchema);
