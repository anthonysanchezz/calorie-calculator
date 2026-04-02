export default function Blog() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-bold mb-6">
        Nutrition Blog
      </h1>

      <p className="mb-6 text-gray-700">
        Guides about calories, nutrition and fitness.
      </p>

      <div className="space-y-4">

        <div className="border rounded-lg p-4">
          <h2 className="font-semibold">
            How many calories should you eat per day?
          </h2>
        </div>

        <div className="border rounded-lg p-4">
          <h2 className="font-semibold">
            Calories for weight loss explained
          </h2>
        </div>

      </div>

    </main>
  );
}