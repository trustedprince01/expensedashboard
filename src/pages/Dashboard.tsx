import { useState } from "react";
import { Search, Bell, ChevronDown, CreditCard, Wallet, ArrowUpRight, ArrowDownLeft, ChevronRight, Home, BarChart2, Repeat, User, MessageSquare, Settings, Calendar, LogOut, X } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
const moneyFlowData = [{
  name: "Jan",
  income: 5000,
  expenses: 3000
}, {
  name: "Feb",
  income: 6000,
  expenses: 4000
}, {
  name: "Mar",
  income: 5500,
  expenses: 3500
}, {
  name: "Apr",
  income: 7000,
  expenses: 4500
}, {
  name: "May",
  income: 6500,
  expenses: 3800
}, {
  name: "Jun",
  income: 8000,
  expenses: 5000
}, {
  name: "Jul",
  income: 7500,
  expenses: 4200
}, {
  name: "Aug",
  income: 9000,
  expenses: 5500
}];
const incomeData = [{
  name: "Mon",
  value: 1200
}, {
  name: "Tue",
  value: 900
}, {
  name: "Wed",
  value: 1500
}, {
  name: "Thu",
  value: 800
}, {
  name: "Fri",
  value: 1300
}, {
  name: "Sat",
  value: 700
}, {
  name: "Sun",
  value: 500
}];
const expensesData = [{
  name: "Mon",
  value: 800
}, {
  name: "Tue",
  value: 600
}, {
  name: "Wed",
  value: 900
}, {
  name: "Thu",
  value: 500
}, {
  name: "Fri",
  value: 700
}, {
  name: "Sat",
  value: 400
}, {
  name: "Sun",
  value: 300
}];
const transactions = [{
  id: 1,
  name: "Spotify Premium",
  date: "18 Jul, 2023",
  amount: "-$11.99",
  type: "subscription",
  icon: "🎵"
}, {
  id: 2,
  name: "Amazon Purchase",
  date: "17 Jul, 2023",
  amount: "-$238.50",
  type: "shopping",
  icon: "🛒"
}, {
  id: 3,
  name: "Salary Deposit",
  date: "15 Jul, 2023",
  amount: "+$4,880.00",
  type: "income",
  icon: "💼"
}, {
  id: 4,
  name: "Restaurant Bill",
  date: "14 Jul, 2023",
  amount: "-$56.25",
  type: "food",
  icon: "🍽️"
}, {
  id: 5,
  name: "Electricity Bill",
  date: "12 Jul, 2023",
  amount: "-$85.30",
  type: "utility",
  icon: "⚡"
}];
const chartConfig = {
  income: {
    label: "Income",
    theme: {
      light: "#1EAEDB",
      dark: "#1EAEDB"
    }
  },
  expenses: {
    label: "Expenses",
    theme: {
      light: "#33C3F0",
      dark: "#33C3F0"
    }
  }
};
const Dashboard = () => {
  const [timeFilter, setTimeFilter] = useState("30days");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dismissUsedSpace, setDismissUsedSpace] = useState(false);
  return <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <div className="md:hidden p-4 flex justify-between items-center bg-white border-b border-gray-200">
        <div className="flex items-center">
          <span className="text-blue-600 font-bold text-2xl">PRINCE</span>
          <span className="text-gray-800 font-bold text-2xl">PAY</span>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      <div className={`${menuOpen ? 'block' : 'hidden'} md:block w-full md:w-72 bg-white border-r border-gray-200 fixed md:static top-16 left-0 h-screen md:h-auto z-50 flex flex-col`}>
        <div className="p-6 flex-1">
          <div className="flex items-center mb-10 justify-center md:justify-start">
            <span className="font-bold text-2xl italic">PRINCEPAY</span>
          </div>
          
          <nav className="space-y-2">
            <SidebarItem icon={<Home size={20} />} label="Dashboard" active />
            <SidebarItem icon={<BarChart2 size={20} />} label="Report" />
            <SidebarItem icon={<Repeat size={20} />} label="Transaction" />
            <SidebarItem icon={<User size={20} />} label="Account" />
            <SidebarItem icon={<CreditCard size={20} />} label="Card" />
            
            <div className="mt-10">
              <SidebarItem icon={<MessageSquare size={20} />} label="Support" />
              <SidebarItem icon={<Settings size={20} />} label="Settings" />
            </div>
          </nav>
        </div>
        
        <div className="mt-auto p-6 py-[240px] px-[24px] mx-0 my-[140px]">
          {!dismissUsedSpace && <div className="mb-4">
              <div className="bg-blue-600 rounded-xl p-4 text-white relative">
                <button onClick={() => setDismissUsedSpace(true)} className="absolute top-3 right-3 text-white/80 hover:text-white">
                  <X size={16} />
                </button>
                <h3 className="font-semibold text-lg mb-1">Used Space</h3>
                <p className="text-sm mb-2 text-blue-100">
                  Your team have used 80% of your available space. want more?
                </p>
                <Progress value={80} className="h-1.5 bg-blue-400/50" />
                <div className="flex justify-between mt-3">
                  <button className="text-sm text-blue-200 hover:text-white transition-colors">
                    Dismiss
                  </button>
                  <button className="text-sm font-medium hover:underline">
                    Upgrade plan
                  </button>
                </div>
              </div>
            </div>}
          
          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 border-2 border-gray-200">
                  <AvatarImage src="https://cdn.gpteng.co/lovable-storage/zadaaanjsmvl0/1mrccCUD_UfGQcwWDGyzk.png" alt="Profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-800">John Doe</p>
                  <p className="text-xs text-gray-500">chibuzorprince68@gmail.com</p>
                </div>
              </div>
              <button className="text-gray-500 hover:text-gray-700 transition-colors">
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input type="text" placeholder="Search" className="pl-10 pr-4 py-2 bg-gray-100 focus:ring-blue-500 w-full" />
            </div>
            
            <div className="flex items-center space-x-4 justify-between md:justify-end w-full">
              <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 border-2 border-gray-200">
                  <AvatarImage src="https://cdn.gpteng.co/lovable-storage/zadaaanjsmvl0/1mrccCUD_UfGQcwWDGyzk.png" alt="Profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="ml-3 hidden md:block">
                  <p className="text-sm font-medium text-gray-800">Prince Design</p>
                  <p className="text-xs text-gray-500">Premium User</p>
                </div>
                <ChevronDown className="h-4 w-4 text-gray-600 ml-2" />
              </div>
            </div>
          </div>
        </header>
        
        <main className="p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Hello, Prince! 👋</h1>
            <p className="text-gray-500">Welcome back to your dashboard</p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
            <div className="flex space-x-2 overflow-x-auto pb-2 whitespace-nowrap">
              {["12months", "30days", "7days", "24hours", "custom"].map(filter => <button key={filter} onClick={() => setTimeFilter(filter)} className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${timeFilter === filter ? "bg-blue-100 text-blue-700 font-medium" : "bg-white text-gray-600 hover:bg-gray-100 transition-colors"}`}>
                  {filter === "12months" ? "12 months" : filter === "30days" ? "30 days" : filter === "7days" ? "7 days" : filter === "24hours" ? "24 hours" : "Custom"}
                </button>)}
            </div>
            
            <div className="flex gap-2">
              <div className="w-32 sm:w-40">
                <Select>
                  <SelectTrigger className="bg-white">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <SelectValue placeholder="Select Date" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="yesterday">Yesterday</SelectItem>
                    <SelectItem value="thisWeek">This week</SelectItem>
                    <SelectItem value="thisMonth">This month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-32 sm:w-40">
                <Select>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Filter By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="income">Income</SelectItem>
                    <SelectItem value="expense">Expense</SelectItem>
                    <SelectItem value="transfer">Transfer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-purple-600 to-purple-500 text-white p-6 rounded-t-lg relative">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm opacity-80">Current Balance</p>
                    <h2 className="text-4xl font-bold mt-2">$5,750.20</h2>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="bg-red-500 rounded-full w-8 h-8 opacity-90"></div>
                    <div className="bg-yellow-500 rounded-full w-8 h-8 opacity-90"></div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_70%)] opacity-40 py-0 my-0 px-0"></div>
                
                <div className="mt-14 flex justify-between items-center pt-4">
                  <p className="font-medium tracking-wider text-white text-lg">5282 3456 7890 1289</p>
                  <p className="text-sm font-light">09/25</p>
                </div>
              </div>
              
            </Card>

            <Card className="hover:shadow-md transition-shadow">
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
                          <stop offset="0%" stopColor="#1EAEDB" stopOpacity={0.4} />
                          <stop offset="100%" stopColor="#1EAEDB" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="value" stroke="#1EAEDB" fillOpacity={1} fill="url(#incomeGradient)" />
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

            <Card className="hover:shadow-md transition-shadow">
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
                          <stop offset="0%" stopColor="#33C3F0" stopOpacity={0.4} />
                          <stop offset="100%" stopColor="#33C3F0" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="value" stroke="#33C3F0" fillOpacity={1} fill="url(#expensesGradient)" />
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
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex justify-between items-center">
                <h3 className="font-medium">Money Flow</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                    <span className="text-xs text-gray-600">Income</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-300 mr-1"></div>
                    <span className="text-xs text-gray-600">Expenses</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="h-[300px] sm:h-[350px] md:h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={moneyFlowData} margin={{
                  top: 20,
                  right: 10,
                  left: 0,
                  bottom: 5
                }}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{
                    fontSize: 12
                  }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{
                    fontSize: 12
                  }} width={40} />
                    <Tooltip contentStyle={{
                    borderRadius: '8px',
                    border: '1px solid #f0f0f0',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }} />
                    <Bar dataKey="income" name="Income" fill="#1EAEDB" radius={[4, 4, 0, 0]} barSize={window.innerWidth < 640 ? 15 : 30} />
                    <Bar dataKey="expenses" name="Expenses" fill="#33C3F0" radius={[4, 4, 0, 0]} barSize={window.innerWidth < 640 ? 15 : 30} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex justify-between items-center">
                <h3 className="font-medium">Recent Transactions</h3>
                <button className="text-blue-600 text-sm hover:text-blue-700 transition-colors">View All</button>
              </CardHeader>
              <CardContent className="px-0">
                <div className="divide-y divide-gray-100">
                  {transactions.map(tx => <div key={tx.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className={`
                            w-10 h-10 rounded-lg flex items-center justify-center text-lg
                            ${tx.type === 'income' ? 'bg-green-100' : tx.type === 'shopping' ? 'bg-blue-100' : tx.type === 'subscription' ? 'bg-blue-100' : tx.type === 'food' ? 'bg-yellow-100' : 'bg-gray-100'}
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
                    </div>)}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <button className="text-blue-600 flex items-center text-sm hover:text-blue-700 transition-colors">
                  <span>View all transactions</span> 
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>;
};
const SidebarItem = ({
  icon,
  label,
  active = false
}) => {
  return <a href="#" className={`flex items-center px-4 py-3 rounded-lg transition-colors ${active ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
      <div className={`mr-3 ${active ? 'text-white' : 'text-gray-500'}`}>
        {icon}
      </div>
      <span className={`${active ? 'font-medium' : ''}`}>{label}</span>
    </a>;
};
export default Dashboard;