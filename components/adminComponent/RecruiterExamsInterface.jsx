"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RecruiterInterface({ applicantId }) {
  const [examTitle, setExamTitle] = useState("");
  const [steps, setSteps] = useState([
    { type: "multiple-choice", questions: [], passScore: 0 },
    { type: "multiple-choice", questions: [], passScore: 0 },
    { type: "multiple-choice", questions: [], passScore: 0 },
  ]);

  const updateStep = (index, field, value) => {
    const newSteps = [...steps];
    newSteps[index][field] = value;
    if (field === "type") {
      newSteps[index].questions = [];
    }
    setSteps(newSteps);
  };

  const addQuestion = (stepIndex) => {
    const newSteps = [...steps];
    const step = newSteps[stepIndex];
    if (step.type === "multiple-choice") {
      step.questions.push({
        text: "",
        options: ["", "", "", ""],
        correctAnswer: 0,
      });
    } else if (step.type === "coding" || step.type === "essay") {
      step.questions.push({ text: "", answer: "" });
    }
    setSteps(newSteps);
  };

  const updateQuestion = (stepIndex, questionIndex, field, value) => {
    const newSteps = [...steps];
    newSteps[stepIndex].questions[questionIndex][field] = value;
    setSteps(newSteps);
  };
  const handleSubmit = async (data) => {
    const res = await fetch("/api/exams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    if (!res) {
      toast.error("Failed to create exams");
    } else {
      toast.success("Exams created successfully");
    }
  };

  const handleCreateExam = () => {
    const newExam = { title: examTitle, steps, applicantId };
    console.log("Created Exam:", newExam);
    handleSubmit(newExam);
    setExamTitle("");
    setSteps([
      { type: "multiple-choice", questions: [], passScore: 0 },
      { type: "multiple-choice", questions: [], passScore: 0 },
      { type: "multiple-choice", questions: [], passScore: 0 },
    ]);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Exam</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="examTitle">Exam Title</Label>
            <Input
              id="examTitle"
              value={examTitle}
              onChange={(e) => setExamTitle(e.target.value)}
              placeholder="Enter exam title"
            />
          </div>
          {steps.map((step, stepIndex) => (
            <Card key={stepIndex} className="mb-4">
              <CardHeader>
                <CardTitle>Step {stepIndex + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor={`examType-${stepIndex}`}>Exam Type</Label>
                    <Select
                      value={step.type}
                      onValueChange={(value) =>
                        updateStep(stepIndex, "type", value)
                      }
                    >
                      <SelectTrigger id={`examType-${stepIndex}`}>
                        <SelectValue placeholder="Select exam type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="multiple-choice">
                          Multiple Choice
                        </SelectItem>
                        <SelectItem value="coding">Coding</SelectItem>
                        <SelectItem value="essay">Essay</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor={`passScore-${stepIndex}`}>Pass Score</Label>
                    <Input
                      id={`passScore-${stepIndex}`}
                      type="number"
                      value={step.passScore}
                      onChange={(e) =>
                        updateStep(
                          stepIndex,
                          "passScore",
                          parseInt(e.target.value)
                        )
                      }
                      placeholder="Pass score"
                    />
                  </div>
                  {step.questions.map((question, questionIndex) => (
                    <div key={questionIndex} className="border p-4 rounded-md">
                      <Textarea
                        value={question.text}
                        onChange={(e) =>
                          updateQuestion(
                            stepIndex,
                            questionIndex,
                            "text",
                            e.target.value
                          )
                        }
                        placeholder="Question text"
                      />
                      {step.type === "multiple-choice" && (
                        <div className="mt-2 space-y-2">
                          {question.options.map((option, optionIndex) => (
                            <Input
                              key={optionIndex}
                              value={option}
                              onChange={(e) => {
                                const newOptions = [...question.options];
                                newOptions[optionIndex] = e.target.value;
                                updateQuestion(
                                  stepIndex,
                                  questionIndex,
                                  "options",
                                  newOptions
                                );
                              }}
                              placeholder={`Option ${optionIndex + 1}`}
                            />
                          ))}
                          <Select
                            value={question.correctAnswer.toString()}
                            onValueChange={(value) =>
                              updateQuestion(
                                stepIndex,
                                questionIndex,
                                "correctAnswer",
                                parseInt(value)
                              )
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select correct answer" />
                            </SelectTrigger>
                            <SelectContent>
                              {question.options.map((_, index) => (
                                <SelectItem
                                  key={index}
                                  value={index.toString()}
                                >
                                  Option {index + 1}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                      {(step.type === "coding" || step.type === "essay") && (
                        <div className="mt-2">
                          <Label
                            htmlFor={`answer-${stepIndex}-${questionIndex}`}
                          >
                            Model Answer
                          </Label>
                          <Textarea
                            id={`answer-${stepIndex}-${questionIndex}`}
                            value={question.answer}
                            onChange={(e) =>
                              updateQuestion(
                                stepIndex,
                                questionIndex,
                                "answer",
                                e.target.value
                              )
                            }
                            placeholder="Enter model answer"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                  <Button onClick={() => addQuestion(stepIndex)}>
                    Add Question
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          <Button onClick={handleCreateExam}>Create Exam</Button>
        </CardContent>
      </Card>
    </div>
  );
}
