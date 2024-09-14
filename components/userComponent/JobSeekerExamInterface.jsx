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

// type Question = {
//   text: string
//   options?: string[]
//   correctAnswer?: number
// }

// type ExamStep = {
//   type: 'multiple-choice' | 'coding' | 'essay'
//   questions: Question[]
//   passScore: number
// }

// type Exam = {
//   title: string
//   steps: ExamStep[]
// }

// type Props = {
//   exams: Exam[] | null | undefined
//   currentUser: { name: string } | null
// }

export default function JobSeekerInterface({ exams, currentUser }) {
  const [currentExam, setCurrentExam] = (useState < Exam) | (null > null);
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

  if (!exams || exams.length === 0) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Job Application Exam System</CardTitle>
          <CardDescription>No exams available at the moment.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Please check back later for available exams.</p>
        </CardContent>
      </Card>
    );
  }

  if (!currentExam) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exams.map((exam) => (
          <Card key={exam.title}>
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
    );
  }

  const step = currentExam.steps[currentStep];
  const progress = ((currentStep + 1) / currentExam.steps.length) * 100;

  return (
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
      {result && result.feedback === "Exam completed!" && (
        <CardFooter>
          <div className="w-full space-y-4">
            <h3 className="text-xl font-semibold">Exam Results</h3>
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
        </CardFooter>
      )}
    </Card>
  );
}
