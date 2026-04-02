"use client";
import { useState } from "react";

export default function Calculator() {
  const [form, setForm] = useState({
    gender: "male",
    age: "",
    weight: "",
    height: "",
    activity: 1.2,
    goal: "maintain"
  });

  const [result, setResult] = useState(null);

  const calculate = () => {
    let tmb;

    if (form.gender === "male") {
      tmb = 10 * form.weight + 6.25 * form.height - 5 * form.age + 5;
    } else {
      tmb = 10 * form.weight + 6.25 * form.height - 5 * form.age - 161;
    }

    let maintenance = tmb * form.activity;

    let calories = maintenance;
    if (form.goal === "lose") calories *= 0.8;
    if (form.goal === "gain") calories *= 1.1;

    setResult(Math.round(calories));
  };

  return (
    <div className="space-y-4">

      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Edad"
          className="border p-2 rounded-lg"
          onChange={(e) => setForm({ ...form, age: +e.target.value })}
        />
        <input
          type="number"
          placeholder="Peso (kg)"
          className="border p-2 rounded-lg"
          onChange={(e) => setForm({ ...form, weight: +e.target.value })}
        />
      </div>

      <input
        type="number"
        placeholder="Altura (cm)"
        className="border p-2 rounded-lg w-full"
        onChange={(e) => setForm({ ...form, height: +e.target.value })}
      />

      <select
        className="border p-2 rounded-lg w-full"
        onChange={(e) => setForm({ ...form, gender: e.target.value })}
      >
        <option value="male">Hombre</option>
        <option value="female">Mujer</option>
      </select>

      <select
        className="border p-2 rounded-lg w-full"
        onChange={(e) => setForm({ ...form, activity: +e.target.value })}
      >
        <option value={1.2}>Sedentario</option>
        <option value={1.375}>Ligero</option>
        <option value={1.55}>Moderado</option>
        <option value={1.725}>Alto</option>
      </select>

      <select
        className="border p-2 rounded-lg w-full"
        onChange={(e) => setForm({ ...form, goal: e.target.value })}
      >
        <option value="maintain">Mantener</option>
        <option value="lose">Perder peso</option>
        <option value="gain">Ganar masa</option>
      </select>

      <button
        onClick={calculate}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Calcular calorías
      </button>

      {result && (
        <>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p>Calorías diarias</p>
            <h3>{result} kcal</h3>
          </div>

          <AdBanner />
        </>
      )}
    </div>
  );
}