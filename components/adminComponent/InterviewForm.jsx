"use client";
import * as React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { format, addDays } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
//import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Calendar } from "../ui/calendar";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { cn } from "@/lib/utils";
import { InfinitySpin } from "react-loader-spinner";

export default function InterviewForm({ applicantDetail }) {
  const [loading, setLoading] = useState(false);
  console.log(applicantDetail);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      time: "",
      interviewType: "phone",
      date: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const interviewData = {
      ...data,
      role: applicantDetail.role,
      applicantId: applicantDetail.id,
      jobId: applicantDetail.jobId,
      userId: applicantDetail.userId,
      status: "pending",
      result: "pending",
    };
    console.log("Form data:", interviewData);
    const res = await fetch("/api/interview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ interviewData }),
    });

    if (!res) {
      console.error("Error scheduling interview:", res);
      setLoading(false);
      return;
    } else {
      const result = await res.json();
      console.log("Interview scheduled successfully:", result);
      setLoading(false);
      alert("Interview scheduled successfully!");
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Schedule an Interview</CardTitle>
        <CardDescription>
          Please fill out the form below to schedule your interview.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <Input id="name" placeholder="John Doe" {...field} />
              )}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...field}
                />
              )}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Preferred Date</Label>

            <Controller
              name="date"
              control={control}
              rules={{
                required: "Date is required",
                pattern: {
                  message: "Invalid Date",
                },
              }}
              render={({ field }) => (
                <Input
                  id="date"
                  type="date"
                  placeholder="Pick a date"
                  {...field}
                />
              )}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Preferred Time</Label>
            <Controller
              name="time"
              control={control}
              rules={{ required: "Time is required" }}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">09:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="13:00">01:00 PM</SelectItem>
                    <SelectItem value="15:00">03:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.time && (
              <p className="text-sm text-red-500">{errors.time.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Interview Type</Label>
            <Controller
              name="interviewType"
              control={control}
              rules={{ required: "Interview type is required" }}
              render={({ field }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="phone" />
                    <Label htmlFor="phone">Phone</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="video" id="video" />
                    <Label htmlFor="video">Video Call</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="in-person" id="in-person" />
                    <Label htmlFor="in-person">In-Person</Label>
                  </div>
                </RadioGroup>
              )}
            />
            {errors.interviewType && (
              <p className="text-sm text-red-500">
                {errors.interviewType.message}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full">
            {loading ? <InfinitySpin color="#212121" /> : "Schedule Interview"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
