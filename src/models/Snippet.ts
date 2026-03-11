import mongoose, { Schema, Document } from "mongoose";

export type SnippetType = "link" | "note" | "command";

export interface ISnippet extends Document {
  title: string;
  content: string;
  tags: string[];
  type: SnippetType;
  createdAt: Date;
  updatedAt: Date;
}

const SnippetSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String], default: [] },
    type: { type: String, enum: ["link", "note", "command"], required: true },
  },
  { timestamps: true },
);

export default mongoose.model<ISnippet>("Snippet", SnippetSchema);
