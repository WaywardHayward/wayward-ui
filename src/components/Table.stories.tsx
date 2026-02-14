import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from "./Table";
import { Card } from "./Card";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

const sampleData = [
  {
    id: 1,
    date: "2024-01-15",
    aircraft: "Cessna 172",
    tailNumber: "G-ABCD",
    route: "EGLL → EGKK",
    duration: "1.5h",
    type: "Solo",
  },
  {
    id: 2,
    date: "2024-01-12",
    aircraft: "Piper PA-28",
    tailNumber: "G-EFGH",
    route: "EGKK → EGLC",
    duration: "2.0h",
    type: "Dual",
  },
  {
    id: 3,
    date: "2024-01-10",
    aircraft: "Cessna 172",
    tailNumber: "G-ABCD",
    route: "EGLC → EGLL",
    duration: "1.2h",
    type: "Solo",
  },
];

export const Default: Story = {
  render: () => (
    <Card variant="default" padding="none">
      <Table variant="default">
        <TableHeader variant="default">
          <TableRow variant="default" hoverable={false}>
            <TableHeaderCell variant="default">Date</TableHeaderCell>
            <TableHeaderCell variant="default">Aircraft</TableHeaderCell>
            <TableHeaderCell variant="default">Route</TableHeaderCell>
            <TableHeaderCell variant="default">Duration</TableHeaderCell>
            <TableHeaderCell variant="default">Type</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody variant="default">
          {sampleData.map((row) => (
            <TableRow key={row.id} variant="default">
              <TableCell variant="default">{row.date}</TableCell>
              <TableCell variant="default">
                <div>
                  <div className="font-medium">{row.aircraft}</div>
                  <div className="text-slate-500 dark:text-slate-400 text-sm">
                    {row.tailNumber}
                  </div>
                </div>
              </TableCell>
              <TableCell variant="default">{row.route}</TableCell>
              <TableCell variant="default">{row.duration}</TableCell>
              <TableCell variant="default">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    row.type === "Solo"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                  }`}
                >
                  {row.type}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  ),
};

export const Glass: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  render: () => (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-6 rounded-xl">
      <Card variant="glass" padding="none">
        <Table variant="glass">
          <TableHeader variant="glass">
            <TableRow variant="glass" hoverable={false}>
              <TableHeaderCell variant="glass">Date</TableHeaderCell>
              <TableHeaderCell variant="glass">Aircraft</TableHeaderCell>
              <TableHeaderCell variant="glass">Route</TableHeaderCell>
              <TableHeaderCell variant="glass">Duration</TableHeaderCell>
              <TableHeaderCell variant="glass">Type</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody variant="glass">
            {sampleData.map((row) => (
              <TableRow key={row.id} variant="glass">
                <TableCell variant="glass">{row.date}</TableCell>
                <TableCell variant="glass">
                  <div>
                    <div className="font-medium text-white">{row.aircraft}</div>
                    <div className="text-slate-400 text-sm">{row.tailNumber}</div>
                  </div>
                </TableCell>
                <TableCell variant="glass">{row.route}</TableCell>
                <TableCell variant="glass" className="font-semibold text-cyan-400">
                  {row.duration}
                </TableCell>
                <TableCell variant="glass">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      row.type === "Solo"
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    }`}
                  >
                    {row.type}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  ),
};

export const Minimal: Story = {
  render: () => (
    <Table variant="minimal">
      <TableHeader variant="minimal">
        <TableRow variant="minimal" hoverable={false}>
          <TableHeaderCell variant="minimal">Date</TableHeaderCell>
          <TableHeaderCell variant="minimal">Aircraft</TableHeaderCell>
          <TableHeaderCell variant="minimal">Route</TableHeaderCell>
          <TableHeaderCell variant="minimal">Duration</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody variant="minimal">
        {sampleData.map((row) => (
          <TableRow key={row.id} variant="minimal">
            <TableCell variant="minimal">{row.date}</TableCell>
            <TableCell variant="minimal">{row.aircraft}</TableCell>
            <TableCell variant="minimal">{row.route}</TableCell>
            <TableCell variant="minimal">{row.duration}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const ClickableRows: Story = {
  render: () => (
    <Card variant="default" padding="none">
      <Table variant="default">
        <TableHeader variant="default">
          <TableRow variant="default" hoverable={false}>
            <TableHeaderCell variant="default">Date</TableHeaderCell>
            <TableHeaderCell variant="default">Aircraft</TableHeaderCell>
            <TableHeaderCell variant="default">Route</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody variant="default">
          {sampleData.map((row) => (
            <TableRow
              key={row.id}
              variant="default"
              onClick={() => alert(`Clicked row ${row.id}`)}
            >
              <TableCell variant="default">{row.date}</TableCell>
              <TableCell variant="default">{row.aircraft}</TableCell>
              <TableCell variant="default">{row.route}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  ),
};

export const WithAlignment: Story = {
  render: () => (
    <Card variant="default" padding="none">
      <Table variant="default">
        <TableHeader variant="default">
          <TableRow variant="default" hoverable={false}>
            <TableHeaderCell variant="default" align="left">
              Item
            </TableHeaderCell>
            <TableHeaderCell variant="default" align="center">
              Quantity
            </TableHeaderCell>
            <TableHeaderCell variant="default" align="right">
              Price
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody variant="default">
          <TableRow variant="default">
            <TableCell variant="default" align="left">
              Flight Hours
            </TableCell>
            <TableCell variant="default" align="center">
              10
            </TableCell>
            <TableCell variant="default" align="right">
              £1,500
            </TableCell>
          </TableRow>
          <TableRow variant="default">
            <TableCell variant="default" align="left">
              Landing Fees
            </TableCell>
            <TableCell variant="default" align="center">
              5
            </TableCell>
            <TableCell variant="default" align="right">
              £125
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  ),
};
