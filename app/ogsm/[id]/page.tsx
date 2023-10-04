import Card from "@/components/Card";

export default function Ogsm() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-3">
        <Card>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Objective:</span>
            <input
              type="text"
              className="w-full rounded border px-2 py-1 text-sm"
            />
          </div>
        </Card>
      </div>
      <Card></Card> <Card></Card> <Card></Card>
    </div>
  );
}
