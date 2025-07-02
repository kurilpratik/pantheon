"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  Link,
  Unlink,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";

const DashboardHome = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [kiteData, setKiteData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Kite Connect API configuration
  const KITE_API_KEY = process.env.NEXT_PUBLIC_KITE_API_KEY;
  const KITE_API_SECRET = process.env.NEXT_PUBLIC_KITE_API_SECRET;
  const KITE_REDIRECT_URI =
    process.env.NEXT_PUBLIC_KITE_REDIRECT_URI ||
    "http://localhost:3000/dashboard";

  const connectToKite = async () => {
    setIsConnecting(true);
    try {
      // Generate login URL for Kite Connect
      const loginUrl = `https://kite.trade/connect/login?api_key=${KITE_API_KEY}&v=3`;

      // Open Kite login in a new window
      const loginWindow = window.open(
        loginUrl,
        "kite_login",
        "width=500,height=600",
      );

      // Listen for the redirect with request token
      const checkLogin = setInterval(() => {
        if (loginWindow.closed) {
          clearInterval(checkLogin);
          setIsConnecting(false);

          // Check if we have the request token in localStorage
          const requestToken = localStorage.getItem("kite_request_token");
          if (requestToken) {
            generateSession(requestToken);
          } else {
            toast.error("Login was cancelled or failed");
          }
        }
      }, 1000);
    } catch (error) {
      console.error("Error connecting to Kite:", error);
      toast.error("Failed to connect to Kite");
      setIsConnecting(false);
    }
  };

  const generateSession = async (requestToken) => {
    try {
      setLoading(true);

      const response = await fetch("/api/kite/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requestToken,
          apiKey: KITE_API_KEY,
          apiSecret: KITE_API_SECRET,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsConnected(true);
        localStorage.setItem("kite_access_token", data.accessToken);
        toast.success("Successfully connected to Kite!");
        fetchKiteData();
      } else {
        toast.error(data.error || "Failed to generate session");
      }
    } catch (error) {
      console.error("Error generating session:", error);
      toast.error("Failed to generate session");
    } finally {
      setLoading(false);
    }
  };

  const fetchKiteData = async () => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem("kite_access_token");

      if (!accessToken) {
        toast.error("No access token found");
        return;
      }

      const response = await fetch("/api/kite/data", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        setKiteData(data.data);
        toast.success("Data fetched successfully!");
      } else {
        toast.error(data.error || "Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching Kite data:", error);
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  const disconnectKite = () => {
    localStorage.removeItem("kite_access_token");
    localStorage.removeItem("kite_request_token");
    setIsConnected(false);
    setKiteData(null);
    toast.success("Disconnected from Kite");
  };

  // Check if already connected on component mount
  useEffect(() => {
    const accessToken = localStorage.getItem("kite_access_token");
    if (accessToken) {
      setIsConnected(true);
      fetchKiteData();
    }
  }, []);

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor your trading portfolio and market data
          </p>
        </div>

        <div className="flex items-center gap-3">
          {isConnected ? (
            <>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Activity className="h-3 w-3" />
                Connected
              </Badge>
              <Button
                variant="outline"
                onClick={fetchKiteData}
                disabled={loading}
                className="flex items-center gap-2"
              >
                <RefreshCw
                  className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
                />
                Refresh Data
              </Button>
              <Button
                variant="destructive"
                onClick={disconnectKite}
                className="flex items-center gap-2"
              >
                <Unlink className="h-4 w-4" />
                Disconnect
              </Button>
            </>
          ) : (
            <Button
              onClick={connectToKite}
              disabled={isConnecting || loading}
              className="flex items-center gap-2"
            >
              <Link className="h-4 w-4" />
              {isConnecting ? "Connecting..." : "Connect to Broker"}
            </Button>
          )}
        </div>
      </div>

      <Separator />

      {/* Connection Status */}
      {!isConnected && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
              Not Connected
            </CardTitle>
            <CardDescription>
              Connect to your Kite trading account to view portfolio data and
              market information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              You'll need to provide your Kite API credentials to connect. Make
              sure you have:
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {/* <li>• Kite API Key</li>
              <li>• Kite API Secret</li> */}
              <li>• Valid Kite trading account</li>
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Portfolio Data */}
      {isConnected && kiteData && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Portfolio Value
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ₹{kiteData.portfolio?.totalValue?.toLocaleString() || "0"}
              </div>
              <p className="text-xs text-muted-foreground">
                Current market value
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Day's P&L</CardTitle>
              {kiteData.portfolio?.dayPnL >= 0 ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
            </CardHeader>
            <CardContent>
              <div
                className={`text-2xl font-bold ${
                  kiteData.portfolio?.dayPnL >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                ₹{kiteData.portfolio?.dayPnL?.toLocaleString() || "0"}
              </div>
              <p className="text-xs text-muted-foreground">
                Today's profit/loss
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total P&L</CardTitle>
              {kiteData.portfolio?.totalPnL >= 0 ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
            </CardHeader>
            <CardContent>
              <div
                className={`text-2xl font-bold ${
                  kiteData.portfolio?.totalPnL >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                ₹{kiteData.portfolio?.totalPnL?.toLocaleString() || "0"}
              </div>
              <p className="text-xs text-muted-foreground">
                Overall profit/loss
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Available Balance
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ₹{kiteData.portfolio?.availableBalance?.toLocaleString() || "0"}
              </div>
              <p className="text-xs text-muted-foreground">
                Cash available for trading
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Holdings Table */}
      {isConnected && kiteData?.holdings && kiteData.holdings.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Current Holdings</CardTitle>
            <CardDescription>
              Your current stock and mutual fund holdings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 text-left">Symbol</th>
                    <th className="py-2 text-left">Quantity</th>
                    <th className="py-2 text-left">Avg Price</th>
                    <th className="py-2 text-left">LTP</th>
                    <th className="py-2 text-left">Current Value</th>
                    <th className="py-2 text-left">P&L</th>
                  </tr>
                </thead>
                <tbody>
                  {kiteData.holdings.map((holding, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 font-medium">
                        {holding.tradingsymbol}
                      </td>
                      <td className="py-2">{holding.quantity}</td>
                      <td className="py-2">₹{holding.average_price}</td>
                      <td className="py-2">₹{holding.last_price}</td>
                      <td className="py-2">₹{holding.current_value}</td>
                      <td
                        className={`py-2 ${
                          holding.pnl >= 0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        ₹{holding.pnl}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Loading State */}
      {loading && (
        <Card>
          <CardContent className="flex items-center justify-center py-8">
            <div className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4 animate-spin" />
              <span>Loading data...</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DashboardHome;
