import React, { useState } from "react";
import { Filler, ProgressBar } from "./styles";

interface StrengthMeterProps {
  password: string;
}

function calculateStrength(password: string): number {
  let score = 0;

  // Adiciona pontos para o comprimento, mas cap a 32 caracteres
  score += Math.min(password.length, 32);

  // Adiciona pontos para os tipos de caracteres
  const regexList = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/];
  regexList.forEach((regex) => {
    if (regex.test(password)) {
      score += 4;
    }
  });

  // Adiciona pontos de bônus para complexidade
  if (password.length >= 12) {
    score += 6;
  } else if (password.length >= 8) {
    score += 4;
  }

  return Math.min(score, 100);
}

export function StrengthMeter({ password }: StrengthMeterProps) {
  const strength = calculateStrength(password);
  let color = "";

  // Define os limites para as cores da barra de progresso
  const redLimit = 10;
  const orangeLimit = 20;

  if (strength < redLimit) {
    color = "red";
  } else if (strength < orangeLimit) {
    color = "orange";
  } else {
    color = "green";
  }

  return (
    <ProgressBar>
      <Filler style={{ width: `${strength}%`, backgroundColor: color }} />
    </ProgressBar>
  );
}
