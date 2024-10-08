"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, XCircle } from "lucide-react";

// Dummy exam data
// const dummyExams = [
//   {
//     id: "1",
//     title: "Web Development Fundamentals",
//     steps: [
//       {
//         type: "multiple-choice",
//         questions: [
//           {
//             text: "What does HTML stand for?",
//             options: [
//               "Hyper Text Markup Language",
//               "High Tech Modern Language",
//               "Hyper Transfer Markup Language",
//               "None of the above",
//             ],
//             correctAnswer: 0,
//           },
//           {
//             text: "Which of the following is a CSS framework?",
//             options: ["React", "Angular", "Vue", "Bootstrap"],
//             correctAnswer: 3,
//           },
//         ],
//         passScore: 70,
//       },
//       {
//         type: "coding",
//         questions: [
//           {
//             text: "Write a JavaScript function that reverses a string.",
//             answer:
//               'function reverseString(str) {\n  return str.split("").reverse().join("");\n}',
//           },
//         ],
//         passScore: 80,
//       },
//       {
//         type: "coding",
//         questions: [
//           {
//             text: "Write a JavaScript function that reverses a string.",
//             answer:
//               'function reverseString(str) {\n  return str.split("").reverse().join("");\n}',
//           },
//         ],
//         passScore: 80,
//       },
//     ],
//   },
//   {
//     id: "2",
//     title: "Data Structures and Algorithms",
//     steps: [
//       {
//         type: "multiple-choice",
//         questions: [
//           {
//             text: "What is the time complexity of binary search?",
//             options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
//             correctAnswer: 1,
//           },
//         ],
//         passScore: 75,
//       },
//       {
//         type: "coding",
//         questions: [
//           {
//             text: "Implement a function to find the nth Fibonacci number.",
//             answer:
//               "function fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n-1) + fibonacci(n-2);\n}",
//           },
//         ],
//         passScore: 85,
//       },
//     ],
//   },
// ];

// type Question = {
//   text: string
//   options?: string[]
//   correctAnswer?: number
//   answer?: string
// }

// type ExamStep = {
//   type: 'multiple-choice' | 'coding' | 'essay'
//   questions: Question[]
//   passScore: number
// }

// type Exam = {
//   id: string
//   title: string
//   steps: ExamStep[]
// }

export default function ApplicantExams({ exams: dummyExams, userId }) {
  const [currentExam, setCurrentExam] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [stepResults, setStepResults] = useState([]);

  const startExam = (exam) => {
    setCurrentExam(exam);
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
    setStepResults([]);
  };

  const handleAnswer = (questionIndex, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [currentStep]: {
        ...prev[currentStep],
        [questionIndex]: answer,
      },
    }));
  };

  const submitStep = () => {
    if (!currentExam) return;

    const step = currentExam.steps[currentStep];
    let score = 0;
    const totalQuestions = step.questions.length;

    if (step.type === "multiple-choice") {
      step.questions.forEach((question, index) => {
        if (answers[currentStep]?.[index] === question.correctAnswer) {
          score++;
        }
      });
    } else {
      // For coding and essay questions, we'll just check if an answer was provided
      score = Object.keys(answers[currentStep] || {}).length;
    }

    const percentageScore = (score / totalQuestions) * 100;
    const passed = percentageScore >= step.passScore;

    const stepResult = {
      score: percentageScore,
      passed,
      feedback: passed
        ? "Congratulations! You've passed this step."
        : "You didn't pass this step. Please try again.",
    };

    setStepResults((prev) => [...prev, { score: percentageScore, passed }]);
    setResult(stepResult);
  };

  const nextStep = () => {
    if (currentExam && currentStep < currentExam.steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setResult(null);
    } else {
      // Exam completed
      setResult({ score: 0, passed: true, feedback: "Exam completed!" });
    }
  };

  const retryStep = () => {
    setAnswers((prev) => ({
      ...prev,
      [currentStep]: {},
    }));
    setResult(null);
  };

  if (!currentExam) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Available Exams</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dummyExams.map((exam) => (
            <Card key={exam.id}>
              <CardHeader>
                <CardTitle>{exam.title}</CardTitle>
                <CardDescription>{exam.steps.length} steps</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button onClick={() => startExam(exam)}>Start Exam</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  const step = currentExam.steps[currentStep];
  const progress = ((currentStep + 1) / currentExam.steps.length) * 100;

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>{currentExam.title}</CardTitle>
          <CardDescription>
            Step {currentStep + 1} of {currentExam.steps.length} - {step.type}
          </CardDescription>
          <Progress value={progress} className="w-full" />
        </CardHeader>
        <CardContent>
          {!result && (
            <div className="space-y-4">
              {step.questions.map((question, questionIndex) => (
                <div key={questionIndex} className="space-y-2">
                  <p className="font-semibold">{question.text}</p>
                  {step.type === "multiple-choice" && question.options && (
                    <RadioGroup
                      onValueChange={(value) =>
                        handleAnswer(questionIndex, parseInt(value))
                      }
                      value={answers[currentStep]?.[questionIndex]?.toString()}
                    >
                      {question.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className="flex items-center space-x-2"
                        >
                          <RadioGroupItem
                            value={optionIndex.toString()}
                            id={`option-${questionIndex}-${optionIndex}`}
                          />
                          <Label
                            htmlFor={`option-${questionIndex}-${optionIndex}`}
                          >
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}
                  {(step.type === "coding" || step.type === "essay") && (
                    <Textarea
                      value={
                        answers[currentStep]?.[questionIndex]?.toString() || ""
                      }
                      onChange={(e) =>
                        handleAnswer(questionIndex, e.target.value)
                      }
                      placeholder={`Enter your ${step.type} answer here`}
                      rows={10}
                    />
                  )}
                </div>
              ))}
              <Button onClick={submitStep} className="mt-4">
                Submit
              </Button>
            </div>
          )}
          {result && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Step Result</h3>
              <p className="text-lg">Score: {result.score.toFixed(2)}%</p>
              <p className={result.passed ? "text-green-600" : "text-red-600"}>
                {result.passed ? (
                  <CheckCircle2 className="inline-block mr-2" />
                ) : (
                  <XCircle className="inline-block mr-2" />
                )}
                {result.feedback}
              </p>
              {result.passed ? (
                <Button onClick={nextStep}>
                  {currentStep < currentExam.steps.length - 1
                    ? "Next Step"
                    : "Finish Exam"}
                </Button>
              ) : (
                <Button onClick={retryStep}>Retry Step</Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
      {result && result.feedback === "Exam completed!" && (
        <Card className="w-full max-w-3xl mx-auto mt-4">
          <CardHeader>
            <CardTitle>Exam Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stepResults.map((stepResult, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>Step {index + 1}:</span>
                  <span
                    className={
                      stepResult.passed ? "text-green-600" : "text-red-600"
                    }
                  >
                    {stepResult.score.toFixed(2)}% -{" "}
                    {stepResult.passed ? "Passed" : "Failed"}
                  </span>
                </div>
              ))}
              <Button onClick={() => setCurrentExam(null)} className="w-full">
                Return to Exam List
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
