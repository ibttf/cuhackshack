"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Code2, Calendar, MapPin, Users } from "lucide-react"

export default function HackShackLanding() {
  const itinerary = [
    {
      day: "Day 1 - Friday, Jan 5",
      title: "Arrival & Team Formation",
      events: [
        "12:00 PM: Arrival",
        "Team building activities",
        "Group formation"
      ]
    },
    {
      day: "Days 2-6 Jan 11",
      title: "Build Week",
      events: ["Build all day"]
    },
    {
      day: "Day 7 - Thursday, Jan 11",
      title: "Demo Day",
      events: ["Final presentations", "Startup mentor feedback"]
    },
    {
      day: "Day 8 - Friday, Jan 12",
      title: "Demo Day",
      events: ["Closing ceremony", "Departure"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white font-inter">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent" />
        <div className="z-10 text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-4 text-gray-800">
            Columbia Hack Shack
          </h1>
          <p className="text-2xl text-gray-700">
            One week. One cabin. All builders.
          </p>
          <p className="text-xl text-gray-600">
            January 5-12, 2024 • Cabin in Upstate NY
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 mt-8 text-white"
            onClick={() => window.open("", "_blank")}
          >
            Apply by Dec 15
          </Button>
        </div>
      </section>
      {/* What Are We Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            What is HackShack?
          </h2>
          <div className="space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed">
              Hack Shack is a week-long cabin trip that brings together 10-20 of
              Columbia's most motivated builders.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              For one week, you'll live in a fully-equipped cabin in upstate New
              York with fellow builders, working on the most technically
              ambitious project of your life. No distractions.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Start with team formation and bonding, end with a pitch day in
              front of startup founders. Meet co-founders and make lifelong
              friends.
            </p>
          </div>
        </div>
      </section>

      {/* What Do We Look For Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-indigo-100 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            What Do We Look For?
          </h2>
          <div className="space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed">
              We're looking for{" "}
              <span className="font-semibold">cracked coders and builders</span>{" "}
              who have an interest in startups.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              If your Github is green, you have a proven interest in startups,
              etc etc, please apply!
            </p>
          </div>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 mt-12 text-white"
            onClick={() => window.open("", "_blank")}
          >
            Apply by Dec 15
          </Button>
        </div>
      </section>
      {/* Itinerary Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-indigo-100 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Your Week at Hack Shack (Jan 5-12)
            </h2>
            <p className="text-xl text-gray-600">Very rough itinerary</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {itinerary.map((day, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur border-indigo-100 shadow-lg"
              >
                <CardHeader>
                  <Calendar className="w-8 h-8 mb-2 text-blue-600" />
                  <CardTitle className="text-xl text-gray-800">
                    {day.title}
                  </CardTitle>
                  <p className="text-xl text-gray-600">{day.day}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {day.events.map((event, i) => (
                      <li key={i} className="text-gray-600 text-sm">
                        {event}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center bg-indigo-100">
        <div className="max-w-4xl mx-auto space-y-8">
          <Users className="w-16 h-16 mx-auto text-blue-600 mb-8" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Join Columbia Builders
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Applications are open for Columbia undergraduates who are ready to
            dedicate a week to making lifelong relationships and building
            something amazing.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 text-white"
            onClick={() => window.open("", "_blank")}
          >
            Apply by Dec 15
          </Button>
        </div>
      </section>
    </div>
  )
}
