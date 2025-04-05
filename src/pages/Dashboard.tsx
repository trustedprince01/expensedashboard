
import { useState } from "react";
import { 
  Search, 
  Bell, 
  ChevronDown, 
  CreditCard, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  ChevronRight, 
  Home, 
  BarChart2, 
  Repeat, 
  User, 
  LifeBuoy, 
  Settings
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from "recharts";

// Sample data for charts
const moneyFlowData = [
  { name: "Jan", income: 5000, expenses: 3000 },
  { name: "Feb", income: 6000, expenses: 4000 },
  { name: "Mar", income: 5500, expenses: 3500 },
  { name: "Apr", income: 7000, expenses: 4500 },
  { name: "May", income: 6500, expenses: 3800 },
  { name: "Jun", income: 8000, expenses: 5000 },
  { name: "Jul", income: 7500, expenses: 4200 },
  { name: "Aug", income: 9000, expenses: 5500 }
];

const incomeData = [
  { name: "Mon", value: 1200 },
  { name: "Tue", value: 900 },
  { name: "Wed", value: 1500 },
  { name: "Thu", value: 800 },
  { name: "Fri", value: 1300 },
  { name: "Sat", value: 700 },
  { name: "Sun", value: 500 }
];

const expensesData = [
  { name: "Mon", value: 800 },
  { name: "Tue", value: 600 },
  { name: "Wed", value: 900 },
  { name: "Thu", value: 500 },
  { name: "Fri", value: 700 },
  { name: "Sat", value: 400 },
  { name: "Sun", value: 300 }
];

const transactions = [
  { 
    id: 1, 
    name: "Spotify Premium", 
    date: "18 Jul, 2023", 
    amount: "-$11.99", 
    type: "subscription", 
    icon: "🎵"
  },
  { 
    id: 2, 
    name: "Amazon Purchase", 
    date: "17 Jul, 2023", 
    amount: "-$238.50", 
    type: "shopping", 
    icon: "🛒" 
  },
  { 
    id: 3, 
    name: "Salary Deposit", 
    date: "15 Jul, 2023", 
    amount: "+$4,880.00", 
    type: "income", 
    icon: "💼" 
  },
  { 
    id: 4, 
    name: "Restaurant Bill", 
    date: "14 Jul, 2023", 
    amount: "-$56.25", 
    type: "food", 
    icon: "🍽️" 
  },
  { 
    id: 5, 
    name: "Electricity Bill", 
    date: "12 Jul, 2023", 
    amount: "-$85.30", 
    type: "utility", 
    icon: "⚡" 
  }
];

const chartConfig = {
  income: {
    label: "Income",
    theme: {
      light: "#8B5CF6",
      dark: "#8B5CF6",
    },
  },
  expenses: {
    label: "Expenses",
    theme: {
      light: "#E879F9",
      dark: "#E879F9",
    },
  },
};

const Dashboard = () => {
  const [timeFilter, setTimeFilter] = useState("30days");
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-72 bg-white border-r border-gray-200 hidden md:block">
        <div className="p-6">
          <div className="flex items-center mb-12">
            <span className="text-purple-600 font-bold text-2xl">PRINCE</span>
            <span className="text-gray-800 font-bold text-2xl">PAY</span>
          </div>
          
          <nav className="space-y-1">
            <SidebarItem icon={<Home />} label="Dashboard" active />
            <SidebarItem icon={<BarChart2 />} label="Report" />
            <SidebarItem icon={<Repeat />} label="Transaction" />
            <SidebarItem icon={<User />} label="Account" />
            <SidebarItem icon={<CreditCard />} label="Card" />
            <SidebarItem icon={<LifeBuoy />} label="Support" />
            <SidebarItem icon={<Settings />} label="Settings" />
          </nav>
        </div>
        
        <div className="mt-auto p-6">
          <div className="bg-gradient-to-r from-purple-500 to-purple-400 rounded-xl p-4 text-white">
            <h3 className="font-medium text-sm">Need Help?</h3>
            <p className="text-xs mt-1 mb-3 opacity-80">Contact our 24/7 customer support</p>
            <button className="bg-white text-purple-600 text-xs rounded-lg px-4 py-2 font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-4 px-6">
          <div className="flex items-center justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 w-64"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 rounded-full hover:bg-gray-100">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center">
                <img
                  src="https://cdn.gpteng.co/lovable-storage/zadaaanjsmvl0/1mrccCUD_UfGQcwWDGyzk.png"
                  alt="Profile"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="ml-3 hidden md:block">
                  <p className="text-sm font-medium text-gray-800">John Doe</p>
                  <p className="text-xs text-gray-500">Premium User</p>
                </div>
                <ChevronDown className="h-4 w-4 text-gray-600 ml-2" />
              </div>
            </div>
          </div>
        </header>
        
        {/* Content */}
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Hello, John! 👋</h1>
            <p className="text-gray-500">Welcome back to your dashboard</p>
          </div>
          
          {/* Time filters */}
          <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
            {["12months", "30days", "7days", "24hours", "custom"].map((filter) => (
              <button
                key={filter}
                onClick={() => setTimeFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
                  timeFilter === filter
                    ? "bg-purple-100 text-purple-700 font-medium"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {filter === "12months" ? "12 months" : 
                 filter === "30days" ? "30 days" : 
                 filter === "7days" ? "7 days" : 
                 filter === "24hours" ? "24 hours" : "Custom"}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Card */}
            <Card className="bg-gradient-to-r from-purple-700 to-purple-500 text-white">
              <CardHeader>
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm opacity-80">Balance</p>
                    <h2 className="text-2xl font-bold mt-1">$24,562.00</h2>
                  </div>
                  <div className="flex space-x-1">
                    <div className="bg-white/30 h-2 w-2 rounded-full"></div>
                    <div className="bg-white/30 h-2 w-2 rounded-full"></div>
                    <div className="bg-white h-2 w-2 rounded-full"></div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-5 mt-4">
                  <div className="opacity-80">
                    <p className="text-xs font-light">Card Holder</p>
                    <p className="text-sm font-medium">John Doe</p>
                  </div>
                  <div className="opacity-80">
                    <p className="text-xs font-light">Valid Thru</p>
                    <p className="text-sm font-medium">12/24</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-medium tracking-wider">**** **** **** 4562</p>
                  <div className="flex gap-1">
                    <div className="bg-red-500 rounded-full w-6 h-6 opacity-70"></div>
                    <div className="bg-yellow-500 rounded-full w-6 h-6 opacity-70 -ml-3"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Income */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Total Income</h3>
                  <p className="text-2xl font-bold text-gray-800">$48,562.00</p>
                </div>
                <div className="bg-green-100 p-2 rounded-lg">
                  <ArrowUpRight className="h-5 w-5 text-green-600" />
                </div>
              </CardHeader>
              <CardContent className="pt-3 pb-0">
                <div className="h-28">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={incomeData}>
                      <defs>
                        <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.4} />
                          <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#8B5CF6" 
                        fillOpacity={1}
                        fill="url(#incomeGradient)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex items-center text-green-600">
                  <ArrowUpRight className="h-3.5 w-3.5 mr-1" />
                  <span className="text-xs font-medium">+12.5%</span>
                  <span className="text-xs text-gray-500 ml-1.5">from last month</span>
                </div>
              </CardFooter>
            </Card>

            {/* Expenses */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Total Expenses</h3>
                  <p className="text-2xl font-bold text-gray-800">$18,267.00</p>
                </div>
                <div className="bg-red-100 p-2 rounded-lg">
                  <ArrowDownLeft className="h-5 w-5 text-red-600" />
                </div>
              </CardHeader>
              <CardContent className="pt-3 pb-0">
                <div className="h-28">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={expensesData}>
                      <defs>
                        <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#E879F9" stopOpacity={0.4} />
                          <stop offset="100%" stopColor="#E879F9" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#E879F9" 
                        fillOpacity={1}
                        fill="url(#expensesGradient)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex items-center text-red-600">
                  <ArrowDownLeft className="h-3.5 w-3.5 mr-1" />
                  <span className="text-xs font-medium">-3.2%</span>
                  <span className="text-xs text-gray-500 ml-1.5">from last month</span>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Money Flow */}
            <Card>
              <CardHeader className="flex justify-between items-center">
                <h3 className="font-medium">Money Flow</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-1"></div>
                    <span className="text-xs text-gray-600">Income</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-pink-500 mr-1"></div>
                    <span className="text-xs text-gray-600">Expenses</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-72">
                  <BarChart data={moneyFlowData}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="income" name="income" fill="var(--color-income)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expenses" name="expenses" fill="var(--color-expenses)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card>
              <CardHeader className="flex justify-between items-center">
                <h3 className="font-medium">Recent Transactions</h3>
                <button className="text-purple-600 text-sm hover:text-purple-700">View All</button>
              </CardHeader>
              <CardContent className="px-0">
                <div className="divide-y divide-gray-100">
                  {transactions.map(tx => (
                    <div key={tx.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className={`
                            w-10 h-10 rounded-lg flex items-center justify-center text-lg
                            ${tx.type === 'income' ? 'bg-green-100' : 
                              tx.type === 'shopping' ? 'bg-blue-100' : 
                              tx.type === 'subscription' ? 'bg-purple-100' :
                              tx.type === 'food' ? 'bg-yellow-100' : 'bg-gray-100'}
                          `}>
                            {tx.icon}
                          </div>
                          <div className="ml-3">
                            <p className="font-medium text-gray-800">{tx.name}</p>
                            <p className="text-xs text-gray-500">{tx.date}</p>
                          </div>
                        </div>
                        <div className={`font-medium ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-gray-800'}`}>
                          {tx.amount}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <button className="text-purple-600 flex items-center text-sm hover:text-purple-700">
                  <span>View all transactions</span> 
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

// SidebarItem Component
const SidebarItem = ({ icon, label, active = false }) => {
  return (
    <a
      href="#"
      className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
        active ? 'bg-purple-100 text-purple-700' : 'text-gray-500 hover:bg-gray-100'
      }`}
    >
      <div className={`mr-3 ${active ? 'text-purple-700' : 'text-gray-500'}`}>
        {icon}
      </div>
      <span className={active ? 'font-medium' : ''}>{label}</span>
      {active && <div className="ml-auto w-1.5 h-6 bg-purple-600 rounded-full"></div>}
    </a>
  );
};

export default Dashboard;
