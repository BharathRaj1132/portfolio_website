// src/utils/chatbotEngine.js
import chatbotData from "../data/chatbotData";

const normalize = (str) =>
  str.toLowerCase().replace(/\s+/g, " ").trim();

const softIncludes = (text, needle) => normalize(text).includes(normalize(needle));

export function getBotReply(userText) {
  const q = normalize(userText);

  // 1) Direct keyword/pattern includes
  for (const item of chatbotData) {
    for (const p of item.patterns) {
      if (softIncludes(q, p)) return item.answer;
    }
  }

  // 2) Heuristic buckets (helps when phrasing is unexpected)
  if (/\b(skill|tech|stack|tool|library|framework)\b/.test(q)) {
    return "Core stack: React, JavaScript, HTML, CSS. Familiar with Redux, Bootstrap, Tailwind, and performance-focused UI patterns.";
  }
  if (/\b(project|portfolio|work|sample|demo|github)\b/.test(q)) {
    return "I’ve built a task manager, interactive portfolio, and multiple responsive sites—see Projects for details and links.";
  }
  if (/\b(experience|year|background)\b/.test(q)) {
    return "3 years of professional frontend experience delivering clean, maintainable, and performant interfaces.";
  }
  if (/\b(contact|email|linkedin|reach)\b/.test(q)) {
    return "Contact me on LinkedIn: linkedin.com/in/bharath-raj-s-b2894315a.";
  }
  if (/\b(location|where|based|city)\b/.test(q)) {
    return "I’m based in Chennai, Tamil Nadu, India.";
  }
  if (/\b(about|introduce|yourself|who are you)\b/.test(q)) {
    return "I’m Bharath Raj, a React Frontend Developer focused on speed, UX, and clean architecture.";
  }
  if (/\b(hi|hello|)\b/.test(q)) {
    return "Hello, Thanks for visiting my portfolio website, How can i help you";
  }

  // 3) Default fallback
  return "I can answer about my skills, experience, projects, and contact. Try asking: “What are your skills?” or “Show your projects.”";
}
