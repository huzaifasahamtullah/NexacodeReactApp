import React from "react";
import IconCloud from "./IconCloud"; // Adjust the path as necessary

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

function IconCloudDemo() {
  return (
    <div className="bg-gradient-to-b from-transparent to-[#F8FAFC]">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo; // Ensure it's exported as default
