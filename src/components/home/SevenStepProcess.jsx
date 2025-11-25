import React from "react";

export default function SevenStepProcess() {
  return (
    <div className="mt-4">
      <h4 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "Noto Serif Display, serif" }}>
        Our Seven‑Step Process
      </h4>
      <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-800">
        <li>Identify pain point</li>
        <li>Map current workflow</li>
        <li>Explore automation options</li>
        <li>Prototype solution</li>
        <li>Test with real team</li>
        <li>Adjust and optimize</li>
        <li>Implement & support</li>
      </ol>
      <p className="text-sm text-gray-600 mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, mauris vel volutpat interdum,
        augue purus blandit augue, in laoreet sapien est id massa. Integer eget nisi nec nibh viverra sagittis.
      </p>
    </div>
  );
}