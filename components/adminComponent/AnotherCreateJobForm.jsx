import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Job title must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
  category: z.string({
    required_error: "Please select a job category.",
  }),
  type: z.string({
    required_error: "Please select a job type.",
  }),
  experienceLevel: z.string({
    required_error: "Please select an experience level.",
  }),
  salaryMin: z.string().regex(/^\d+$/, "Must be a valid number"),
  salaryMax: z.string().regex(/^\d+$/, "Must be a valid number"),
  description: z.string().min(10, {
    message: "Job description must be at least 10 characters.",
  }),
  requirements: z.string().min(10, {
    message: "Job requirements must be at least 10 characters.",
  }),
  benefits: z.string().min(10, {
    message: "Benefits must be at least 10 characters.",
  }),
  isFeatured: z.boolean().default(false),
});

export default function AnotherCreateJobForm() {
  const { toast } = useToast();
  const form =
    useForm <
    z.infer <
    typeof formSchema >>
      {
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: "",
          company: "",
          location: "",
          category: "",
          type: "",
          experienceLevel: "",
          salaryMin: "",
          salaryMax: "",
          description: "",
          requirements: "",
          benefits: "",
          isFeatured: false,
        },
      };

  function onSubmit(values) {
    // Here you would typically send the form data to your backend API
    console.log(values);
    toast({
      title: "Job posting created",
      description: "The job posting has been successfully created.",
      action: <ToastAction altText="View job posting">View job</ToastAction>,
    });
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Create Job Posting</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Frontend Developer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. TechCorp" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. New York, NY" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a job category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="software-developer">
                      Software Developer
                    </SelectItem>
                    <SelectItem value="data-analysis">Data Analysis</SelectItem>
                    <SelectItem value="ui-design">UI Design</SelectItem>
                    <SelectItem value="product-management">
                      Product Management
                    </SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a job type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="temporary">Temporary</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experienceLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience Level</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an experience level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="entry">Entry level</SelectItem>
                    <SelectItem value="mid">Mid level</SelectItem>
                    <SelectItem value="senior">Senior level</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="salaryMin"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Minimum Salary</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g. 50000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="salaryMax"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Maximum Salary</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g. 80000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe the job role, responsibilities, and qualifications..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="requirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Requirements</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="List specific skills, education, or experience required..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="benefits"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Benefits</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="List benefits, perks, or other incentives..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isFeatured"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Featured Job</FormLabel>
                  <FormDescription>
                    This job will be highlighted and shown at the top of search
                    results.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          <Button type="submit">Create Job Posting</Button>
        </form>
      </Form>
    </div>
  );
}
