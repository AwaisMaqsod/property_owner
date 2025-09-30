"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Home } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

export function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    propertyAddress: "",
    propertyType: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Prepare payload with required fields and static funnel_type
      const payload = {
        name: formData.name,
        email: formData.email,
        phoneNo: formData.phoneNo,
        propertyAddress: formData.propertyAddress,
        propertyType: formData.propertyType,
        funnel_type: "property_owner",
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/funnels`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Form submitted successfully! We'll contact you soon.");

        // Reset form
        setFormData({
          name: "",
          email: "",
          phoneNo: "",
          propertyAddress: "",
          propertyType: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-2xl border-0">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-corent-primary">
          Get Started Today
        </CardTitle>
        <CardDescription className="text-corent-secondary">
          Join thousands of successful property owners. Setup takes less than 5
          minutes.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-corent-primary font-medium">
              Full Name *
            </Label>
            <Input
              id="name"
              placeholder="Alice Smith"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="border-gray-200 focus-visible:ring-corent-tertiary focus:border-corent-tertiary"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-corent-primary font-medium">
              Email Address *
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-corent-secondary" />
              <Input
                id="email"
                type="email"
                placeholder="alice@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="pl-10 border-gray-200 focus-visible:ring-corent-tertiary focus:border-corent-tertiary"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="phoneNo"
              className="text-corent-primary font-medium"
            >
              Phone Number *
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-corent-secondary" />
              <Input
                id="phoneNo"
                type="tel"
                placeholder="+19876543210"
                value={formData.phoneNo}
                onChange={(e) => handleInputChange("phoneNo", e.target.value)}
                className="pl-10 border-gray-200 focus-visible:ring-corent-tertiary focus:border-corent-tertiary"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="propertyAddress"
              className="text-corent-primary font-medium"
            >
              Property Address
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-corent-secondary" />
              <Input
                id="propertyAddress"
                placeholder="123 Main St, City, State"
                value={formData.propertyAddress}
                onChange={(e) =>
                  handleInputChange("propertyAddress", e.target.value)
                }
                className="pl-10 border-gray-200 focus-visible:ring-corent-tertiary focus:border-corent-tertiary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="propertyType"
              className="text-corent-primary font-medium"
            >
              Property Type
            </Label>
            <Select
              onValueChange={(value) =>
                handleInputChange("propertyType", value)
              }
            >
              <SelectTrigger className="border-gray-200 focus:border-corent-tertiary focus:ring-1 focus:ring-corent-tertiary">
                <Home className="h-4 w-4 text-corent-secondary mr-2" />
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single-family">
                  Single Family Home
                </SelectItem>
                <SelectItem value="condo">Condominium</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="duplex">Duplex</SelectItem>
                <SelectItem value="apartment">Apartment Building</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full text-white bg-gradient-to-br from-[#575AA8] to-tertiary hover:from-[#575AA8]/90 hover:to-tertiary/90 cursor-pointer font-semibold py-3 mt-6 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Submitting..." : "Start Earning Passive Income"}
          </Button>

          <p className="text-xs text-center text-corent-secondary mt-4">
            🔒 Your information is secure and will never be shared
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
