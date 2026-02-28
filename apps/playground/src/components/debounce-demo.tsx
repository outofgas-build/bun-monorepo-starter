import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";

interface DebounceDemoProps {
  inputValue: string;
  debouncedValue: string;
  characterCount: number;
  maxCount: number;
  onInputChange: (value: string) => void;
}

export function DebounceDemo({
  inputValue,
  debouncedValue,
  characterCount,
  maxCount,
  onInputChange,
}: DebounceDemoProps) {
  const inputId = "debounce-demo-input";
  const percentage = (characterCount / maxCount) * 100;

  return (
    <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-900 tracking-tight">
          useDebouncedValue
        </CardTitle>
        <CardDescription className="text-base text-gray-500 mt-1">
          Debounced input with 300ms delay
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Input Section */}
        <div className="space-y-2">
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor={inputId}
          >
            Input
          </label>
          <Input
            id={inputId}
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder="Type something..."
            className="h-11 text-base border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Output Display */}
        <div className="p-6 bg-gray-50 rounded-2xl space-y-4">
          {/* Debounced Output */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Output</span>
            <span className="text-lg font-medium text-gray-900">
              {debouncedValue || "—"}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Characters</span>
              <span className="font-medium text-gray-900">
                {characterCount} / {maxCount}
              </span>
            </div>

            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
