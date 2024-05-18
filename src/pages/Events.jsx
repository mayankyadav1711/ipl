import React, { useState, useEffect } from 'react';
import csk from "../components/images/csk.png";
import rcb from "../components/images/rcb.png";
import vs from "../components/images/versus.png";
import motera from "../components/images/motera.webp";
import trophy from "../components/images/trophy.svg";
import Loader from "../components/Loader";
//sample API response 
const sampleData = [
    {
      "matchOrder": "MATCH 67",
      "venue": "Wankhede Stadium, Mumbai",
      "dateTime": "MAY, FRI 17 , 7:30 pm IST",
      "homeTeam": {
        "name": "Mumbai Indians",
        "logo": ""
      },
      "awayTeam": {
        "name": "Lucknow Super Giants",
        "logo": ""
      },
      "result": "Mumbai Indians won "
    },
    {
      "matchOrder": "MATCH 66",
      "venue": "Rajiv Gandhi International Stadium, Hyderabad",
      "dateTime": "MAY, THU 16 , 7:30 pm IST",
      "homeTeam": {
        "name": "Sunrisers Hyderabad",
        "logo": ""
      },
      "awayTeam": {
        "name": "Gujarat Titans",
        "logo": ""
      },
      "result": "Sunrisers Hyderabad won "
    },
    {
      "matchOrder": "MATCH 65",
      "venue": "Barsapara Cricket Stadium, Guwahati",
      "dateTime": "MAY, WED 15 , 7:30 pm IST",
      "homeTeam": {
        "name": "Rajasthan Royals",
        "logo": ""
      },
      "awayTeam": {
        "name": "Punjab Kings",
        "logo": ""
      },
      "result": "Rajasthan Royals won "
    },
    {
      "matchOrder": "MATCH 64",
      "venue": "Arun Jaitley Stadium, Delhi",
      "dateTime": "MAY, TUE 14 , 7:30 pm IST",
      "homeTeam": {
        "name": "Delhi Capitals",
        "logo": ""
      },
      "awayTeam": {
        "name": "Lucknow Super Giants",
        "logo": ""
      },
      "result": "Delhi Capitals won "
    },
    {
      "matchOrder": "MATCH 63",
      "venue": "Narendra Modi Stadium, Ahmedabad",
      "dateTime": "MAY, MON 13 , 7:30 pm IST",
      "homeTeam": {
        "name": "Gujarat Titans",
        "logo": ""
      },
      "awayTeam": {
        "name": "Kolkata Knight Riders",
        "logo": ""
      },
      "result": "Gujarat Titans won "
    },
    {
      "matchOrder": "MATCH 62",
      "venue": "M Chinnaswamy Stadium, Bengaluru",
      "dateTime": "MAY, SUN 12 , 7:30 pm IST",
      "homeTeam": {
        "name": "Royal Challengers Bengaluru",
        "logo": ""
      },
      "awayTeam": {
        "name": "Delhi Capitals",
        "logo": ""
      },
      "result": "Royal Challengers Bengaluru won "
    },
    {
      "matchOrder": "MATCH 61",
      "venue": "MA Chidambaram Stadium, Chennai",
      "dateTime": "MAY, SUN 12 , 3:30 pm IST",
      "homeTeam": {
        "name": "Chennai Super Kings",
        "logo": ""
      },
      "awayTeam": {
        "name": "Rajasthan Royals",
        "logo": ""
      },
      "result": "Chennai Super Kings won "
    },
    {
      "matchOrder": "MATCH 60",
      "venue": "Eden Gardens, Kolkata",
      "dateTime": "MAY, SAT 11 , 7:30 pm IST",
      "homeTeam": {
        "name": "Kolkata Knight Riders",
        "logo": ""
      },
      "awayTeam": {
        "name": "Mumbai Indians",
        "logo": ""
      },
      "result": "Kolkata Knight Riders won "
    },
    {
      "matchOrder": "MATCH 59",
      "venue": "Narendra Modi Stadium, Ahmedabad",
      "dateTime": "MAY, FRI 10 , 7:30 pm IST",
      "homeTeam": {
        "name": "Gujarat Titans",
        "logo": ""
      },
      "awayTeam": {
        "name": "Chennai Super Kings",
        "logo": ""
      },
      "result": "Gujarat Titans won "
    },
    {
      "matchOrder": "MATCH 58",
      "venue": "Himachal Pradesh Cricket Association Stadium, Dharamsala",
      "dateTime": "MAY, THU 9 , 7:30 pm IST",
      "homeTeam": {
        "name": "Punjab Kings",
        "logo": ""
      },
      "awayTeam": {
        "name": "Royal Challengers Bengaluru",
        "logo": ""
      },
      "result": "Punjab Kings won "
    },
    {
      "matchOrder": "MATCH 57",
      "venue": "Rajiv Gandhi International Stadium, Hyderabad",
      "dateTime": "MAY, WED 8 , 7:30 pm IST",
      "homeTeam": {
        "name": "Sunrisers Hyderabad",
        "logo": ""
      },
      "awayTeam": {
        "name": "Lucknow Super Giants",
        "logo": ""
      },
      "result": "Sunrisers Hyderabad won "
    },
    {
      "matchOrder": "MATCH 56",
      "venue": "Arun Jaitley Stadium, Delhi",
      "dateTime": "MAY, TUE 7 , 7:30 pm IST",
      "homeTeam": {
        "name": "Delhi Capitals",
        "logo": ""
      },
      "awayTeam": {
        "name": "Rajasthan Royals",
        "logo": ""
      },
      "result": "Delhi Capitals won "
    },
    {
      "matchOrder": "MATCH 55",
      "venue": "Wankhede Stadium, Mumbai",
      "dateTime": "MAY, MON 6 , 7:30 pm IST",
      "homeTeam": {
        "name": "Mumbai Indians",
        "logo": ""
      },
      "awayTeam": {
        "name": "Sunrisers Hyderabad",
        "logo": ""
      },
      "result": "Mumbai Indians won "
    },
    {
      "matchOrder": "MATCH 54",
      "venue": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow",
      "dateTime": "MAY, SUN 5 , 7:30 pm IST",
      "homeTeam": {
        "name": "Lucknow Super Giants",
        "logo": ""
      },
      "awayTeam": {
        "name": "Kolkata Knight Riders",
        "logo": ""
      },
      "result": "Lucknow Super Giants won "
    },
    {
      "matchOrder": "MATCH 53",
      "venue": "Himachal Pradesh Cricket Association Stadium, Dharamsala",
      "dateTime": "MAY, SUN 5 , 3:30 pm IST",
      "homeTeam": {
        "name": "Punjab Kings",
        "logo": ""
      },
      "awayTeam": {
        "name": "Chennai Super Kings",
        "logo": ""
      },
      "result": "Punjab Kings won "
    },
    {
      "matchOrder": "MATCH 52",
      "venue": "M Chinnaswamy Stadium, Bengaluru",
      "dateTime": "MAY, SAT 4 , 7:30 pm IST",
      "homeTeam": {
        "name": "Royal Challengers Bengaluru",
        "logo": ""
      },
      "awayTeam": {
        "name": "Gujarat Titans",
        "logo": ""
      },
      "result": "Royal Challengers Bengaluru won "
    },
    {
      "matchOrder": "MATCH 51",
      "venue": "Wankhede Stadium, Mumbai",
      "dateTime": "MAY, FRI 3 , 7:30 pm IST",
      "homeTeam": {
        "name": "Mumbai Indians",
        "logo": ""
      },
      "awayTeam": {
        "name": "Kolkata Knight Riders",
        "logo": ""
      },
      "result": "Mumbai Indians won "
    },
    {
      "matchOrder": "MATCH 50",
      "venue": "Rajiv Gandhi International Stadium, Hyderabad",
      "dateTime": "MAY, THU 2 , 7:30 pm IST",
      "homeTeam": {
        "name": "Sunrisers Hyderabad",
        "logo": ""
      },
      "awayTeam": {
        "name": "Rajasthan Royals",
        "logo": ""
      },
      "result": "Sunrisers Hyderabad won "
    },
    {
      "matchOrder": "MATCH 49",
      "venue": "MA Chidambaram Stadium, Chennai",
      "dateTime": "MAY, WED 1 , 7:30 pm IST",
      "homeTeam": {
        "name": "Chennai Super Kings",
        "logo": ""
      },
      "awayTeam": {
        "name": "Punjab Kings",
        "logo": ""
      },
      "result": "Chennai Super Kings won "
    },
    {
      "matchOrder": "MATCH 48",
      "venue": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow",
      "dateTime": "APR, TUE 30 , 7:30 pm IST",
      "homeTeam": {
        "name": "Lucknow Super Giants",
        "logo": ""
      },
      "awayTeam": {
        "name": "Mumbai Indians",
        "logo": ""
      },
      "result": "Lucknow Super Giants won "
    },
    {
      "matchOrder": "MATCH 47",
      "venue": "Eden Gardens, Kolkata",
      "dateTime": "APR, MON 29 , 7:30 pm IST",
      "homeTeam": {
        "name": "Kolkata Knight Riders",
        "logo": ""
      },
      "awayTeam": {
        "name": "Delhi Capitals",
        "logo": ""
      },
      "result": "Kolkata Knight Riders won "
    },
    {
      "matchOrder": "MATCH 46",
      "venue": "MA Chidambaram Stadium, Chennai",
      "dateTime": "APR, SUN 28 , 7:30 pm IST",
      "homeTeam": {
        "name": "Chennai Super Kings",
        "logo": ""
      },
      "awayTeam": {
        "name": "Sunrisers Hyderabad",
        "logo": ""
      },
      "result": "Chennai Super Kings won "
    },
    {
      "matchOrder": "MATCH 45",
      "venue": "Narendra Modi Stadium, Ahmedabad",
      "dateTime": "APR, SUN 28 , 3:30 pm IST",
      "homeTeam": {
        "name": "Gujarat Titans",
        "logo": ""
      },
      "awayTeam": {
        "name": "Royal Challengers Bengaluru",
        "logo": ""
      },
      "result": "Gujarat Titans won "
    },
    {
      "matchOrder": "MATCH 44",
      "venue": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow",
      "dateTime": "APR, SAT 27 , 7:30 pm IST",
      "homeTeam": {
        "name": "Lucknow Super Giants",
        "logo": ""
      },
      "awayTeam": {
        "name": "Rajasthan Royals",
        "logo": ""
      },
      "result": "Lucknow Super Giants won "
    },
    {
      "matchOrder": "MATCH 43",
      "venue": "Arun Jaitley Stadium, Delhi",
      "dateTime": "APR, SAT 27 , 3:30 pm IST",
      "homeTeam": {
        "name": "Delhi Capitals",
        "logo": ""
      },
      "awayTeam": {
        "name": "Mumbai Indians",
        "logo": ""
      },
      "result": "Delhi Capitals won "
    },
    {
      "matchOrder": "MATCH 42",
      "venue": "Eden Gardens, Kolkata",
      "dateTime": "APR, FRI 26 , 7:30 pm IST",
      "homeTeam": {
        "name": "Kolkata Knight Riders",
        "logo": ""
      },
      "awayTeam": {
        "name": "Punjab Kings",
        "logo": ""
      },
      "result": "Kolkata Knight Riders won "
    },
    {
      "matchOrder": "MATCH 41",
      "venue": "Rajiv Gandhi International Stadium, Hyderabad",
      "dateTime": "APR, THU 25 , 7:30 pm IST",
      "homeTeam": {
        "name": "Sunrisers Hyderabad",
        "logo": ""
      },
      "awayTeam": {
        "name": "Royal Challengers Bengaluru",
        "logo": ""
      },
      "result": "Sunrisers Hyderabad won "
    },
    {
      "matchOrder": "MATCH 40",
      "venue": "Arun Jaitley Stadium, Delhi",
      "dateTime": "APR, WED 24 , 7:30 pm IST",
      "homeTeam": {
        "name": "Delhi Capitals",
        "logo": ""
      },
      "awayTeam": {
        "name": "Gujarat Titans",
        "logo": ""
      },
      "result": "Delhi Capitals won "
    },
    {
      "matchOrder": "MATCH 39",
      "venue": "MA Chidambaram Stadium, Chennai",
      "dateTime": "APR, TUE 23 , 7:30 pm IST",
      "homeTeam": {
        "name": "Chennai Super Kings",
        "logo": ""
      },
      "awayTeam": {
        "name": "Lucknow Super Giants",
        "logo": ""
      },
      "result": "Chennai Super Kings won "
    },
    {
      "matchOrder": "MATCH 38",
      "venue": "Sawai Mansingh Stadium, Jaipur",
      "dateTime": "APR, MON 22 , 7:30 pm IST",
      "homeTeam": {
        "name": "Rajasthan Royals",
        "logo": ""
      },
      "awayTeam": {
        "name": "Mumbai Indians",
        "logo": ""
      },
      "result": "Rajasthan Royals won "
    },
    {
      "matchOrder": "MATCH 37",
      "venue": "PCA New Stadium, Mullanpur",
      "dateTime": "APR, SUN 21 , 7:30 pm IST",
      "homeTeam": {
        "name": "Punjab Kings",
        "logo": ""
      },
      "awayTeam": {
        "name": "Gujarat Titans",
        "logo": ""
      },
      "result": "Punjab Kings won "
    },
    {
      "matchOrder": "MATCH 36",
      "venue": "Eden Gardens, Kolkata",
      "dateTime": "APR, SUN 21 , 3:30 pm IST",
      "homeTeam": {
        "name": "Kolkata Knight Riders",
        "logo": ""
      },
      "awayTeam": {
        "name": "Royal Challengers Bengaluru",
        "logo": ""
      },
      "result": "Kolkata Knight Riders won "
    },
    {
      "matchOrder": "MATCH 35",
      "venue": "Arun Jaitley Stadium, Delhi",
      "dateTime": "APR, SAT 20 , 7:30 pm IST",
      "homeTeam": {
        "name": "Delhi Capitals",
        "logo": ""
      },
      "awayTeam": {
        "name": "Sunrisers Hyderabad",
        "logo": ""
      },
      "result": "Delhi Capitals won "
    },
    {
      "matchOrder": "MATCH 34",
      "venue": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow",
      "dateTime": "APR, FRI 19 , 7:30 pm IST",
      "homeTeam": {
        "name": "Lucknow Super Giants",
        "logo": ""
      },
      "awayTeam": {
        "name": "Chennai Super Kings",
        "logo": ""
      },
      "result": "Lucknow Super Giants won "
    },
    {
      "matchOrder": "MATCH 33",
      "venue": "PCA New Stadium, Mullanpur",
      "dateTime": "APR, THU 18 , 7:30 pm IST",
      "homeTeam": {
        "name": "Punjab Kings",
        "logo": ""
      },
      "awayTeam": {
        "name": "Mumbai Indians",
        "logo": ""
      },
      "result": "Punjab Kings won "
    },
    {
      "matchOrder": "MATCH 32",
      "venue": "Narendra Modi Stadium, Ahmedabad",
      "dateTime": "APR, WED 17 , 7:30 pm IST",
      "homeTeam": {
        "name": "Gujarat Titans",
        "logo": ""
      },
      "awayTeam": {
        "name": "Delhi Capitals",
        "logo": ""
      },
      "result": "Gujarat Titans won "
    },
    {
      "matchOrder": "MATCH 31",
      "venue": "Eden Gardens, Kolkata",
      "dateTime": "APR, TUE 16 , 7:30 pm IST",
      "homeTeam": {
        "name": "Kolkata Knight Riders",
        "logo": ""
      },
      "awayTeam": {
        "name": "Rajasthan Royals",
        "logo": ""
      },
      "result": "Kolkata Knight Riders won "
    },
    {
      "matchOrder": "MATCH 30",
      "venue": "M Chinnaswamy Stadium, Bengaluru",
      "dateTime": "APR, MON 15 , 7:30 pm IST",
      "homeTeam": {
        "name": "Royal Challengers Bengaluru",
        "logo": ""
      },
      "awayTeam": {
        "name": "Sunrisers Hyderabad",
        "logo": ""
      },
      "result": "Royal Challengers Bengaluru won "
    },
    {
      "matchOrder": "MATCH 29",
      "venue": "Wankhede Stadium, Mumbai",
      "dateTime": "APR, SUN 14 , 7:30 pm IST",
      "homeTeam": {
        "name": "Mumbai Indians",
        "logo": ""
      },
      "awayTeam": {
        "name": "Chennai Super Kings",
        "logo": ""
      },
      "result": "Mumbai Indians won "
    },
    {
      "matchOrder": "MATCH 28",
      "venue": "Eden Gardens, Kolkata",
      "dateTime": "APR, SUN 14 , 3:30 pm IST",
      "homeTeam": {
        "name": "Kolkata Knight Riders",
        "logo": ""
      },
      "awayTeam": {
        "name": "Lucknow Super Giants",
        "logo": ""
      },
      "result": "Kolkata Knight Riders won "
    },
    {
      "matchOrder": "MATCH 27",
      "venue": "PCA New Stadium, Mullanpur",
      "dateTime": "APR, SAT 13 , 7:30 pm IST",
      "homeTeam": {
        "name": "Punjab Kings",
        "logo": ""
      },
      "awayTeam": {
        "name": "Rajasthan Royals",
        "logo": ""
      },
      "result": "Punjab Kings won "
    },
    {
      "matchOrder": "MATCH 26",
      "venue": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow",
      "dateTime": "APR, FRI 12 , 7:30 pm IST",
      "homeTeam": {
        "name": "Lucknow Super Giants",
        "logo": ""
      },
      "awayTeam": {
        "name": "Delhi Capitals",
        "logo": ""
      },
      "result": "Lucknow Super Giants won "
    },
    {
      "matchOrder": "MATCH 25",
      "venue": "Wankhede Stadium, Mumbai",
      "dateTime": "APR, THU 11 , 7:30 pm IST",
      "homeTeam": {
        "name": "Mumbai Indians",
        "logo": ""
      },
      "awayTeam": {
        "name": "Royal Challengers Bengaluru",
        "logo": ""
      },
      "result": "Mumbai Indians won "
    },
    {
      "matchOrder": "MATCH 24",
      "venue": "Sawai Mansingh Stadium, Jaipur",
      "dateTime": "APR, WED 10 , 7:30 pm IST",
      "homeTeam": {
        "name": "Rajasthan Royals",
        "logo": ""
      },
      "awayTeam": {
        "name": "Gujarat Titans",
        "logo": ""
      },
      "result": "Rajasthan Royals won "
    },
    {
      "matchOrder": "MATCH 23",
      "venue": "PCA New Stadium, Mullanpur",
      "dateTime": "APR, TUE 9 , 7:30 pm IST",
      "homeTeam": {
        "name": "Punjab Kings",
        "logo": ""
      },
      "awayTeam": {
        "name": "Sunrisers Hyderabad",
        "logo": ""
      },
      "result": "Punjab Kings won "
    },
    {
      "matchOrder": "MATCH 22",
      "venue": "MA Chidambaram Stadium, Chennai",
      "dateTime": "APR, MON 8 , 7:30 pm IST",
      "homeTeam": {
        "name": "Chennai Super Kings",
        "logo": ""
      },
      "awayTeam": {
        "name": "Kolkata Knight Riders",
        "logo": ""
      },
      "result": "Chennai Super Kings won "
    },
    {
      "matchOrder": "MATCH 21",
      "venue": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow",
      "dateTime": "APR, SUN 7 , 7:30 pm IST",
      "homeTeam": {
        "name": "Lucknow Super Giants",
        "logo": ""
      },
      "awayTeam": {
        "name": "Gujarat Titans",
        "logo": ""
      },
      "result": "Lucknow Super Giants won "
    },
    {
      "matchOrder": "MATCH 20",
      "venue": "Wankhede Stadium, Mumbai",
      "dateTime": "APR, SUN 7 , 3:30 pm IST",
      "homeTeam": {
        "name": "Mumbai Indians",
        "logo": ""
      },
      "awayTeam": {
        "name": "Delhi Capitals",
        "logo": ""
      },
      "result": "Mumbai Indians won "
    },
    {
      "matchOrder": "MATCH 19",
      "venue": "Sawai Mansingh Stadium, Jaipur",
      "dateTime": "APR, SAT 6 , 7:30 pm IST",
      "homeTeam": {
        "name": "Rajasthan Royals",
        "logo": ""
      },
      "awayTeam": {
        "name": "Royal Challengers Bengaluru",
        "logo": ""
      },
      "result": "Rajasthan Royals won "
    },
    {
      "matchOrder": "MATCH 18",
      "venue": "Rajiv Gandhi International Stadium, Hyderabad",
      "dateTime": "APR, FRI 5 , 7:30 pm IST",
      "homeTeam": {
        "name": "Sunrisers Hyderabad",
        "logo": ""
      },
      "awayTeam": {
        "name": "Chennai Super Kings",
        "logo": ""
      },
      "result": "Sunrisers Hyderabad won "
    },
    {
      "matchOrder": "MATCH 17",
      "venue": "Narendra Modi Stadium, Ahmedabad",
      "dateTime": "APR, THU 4 , 7:30 pm IST",
      "homeTeam": {
        "name": "Gujarat Titans",
        "logo": ""
      },
      "awayTeam": {
        "name": "Punjab Kings",
        "logo": ""
      },
      "result": "Gujarat Titans won "
    },
    {
      "matchOrder": "MATCH 16",
      "venue": "Dr YS Rajasekhara Reddy ACA-VDCA Cricket Stadium, Visakhapatnam",
      "dateTime": "APR, WED 3 , 7:30 pm IST",
      "homeTeam": {
        "name": "Delhi Capitals",
        "logo": ""
      },
      "awayTeam": {
        "name": "Kolkata Knight Riders",
        "logo": ""
      },
      "result": "Delhi Capitals won "
    },
    {
      "matchOrder": "MATCH 15",
      "venue": "M Chinnaswamy Stadium, Bengaluru",
      "dateTime": "APR, TUE 2 , 7:30 pm IST",
      "homeTeam": {
        "name": "Royal Challengers Bengaluru",
        "logo": ""
      },
      "awayTeam": {
        "name": "Lucknow Super Giants",
        "logo": ""
      },
      "result": "Royal Challengers Bengaluru won "
    },
    {
      "matchOrder": "MATCH 14",
      "venue": "Wankhede Stadium, Mumbai",
      "dateTime": "APR, MON 1 , 7:30 pm IST",
      "homeTeam": {
        "name": "Mumbai Indians",
        "logo": ""
      },
      "awayTeam": {
        "name": "Rajasthan Royals",
        "logo": ""
      },
      "result": "Mumbai Indians won "
    },
    {
      "matchOrder": "MATCH 13",
      "venue": "Dr YS Rajasekhara Reddy ACA-VDCA Cricket Stadium, Visakhapatnam",
      "dateTime": "MAR, SUN 31 , 7:30 pm IST",
      "homeTeam": {
        "name": "Delhi Capitals",
        "logo": ""
      },
      "awayTeam": {
        "name": "Chennai Super Kings",
        "logo": ""
      },
      "result": "Delhi Capitals won "
    },
    {
      "matchOrder": "MATCH 12",
      "venue": "Narendra Modi Stadium, Ahmedabad",
      "dateTime": "MAR, SUN 31 , 3:30 pm IST",
      "homeTeam": {
        "name": "Gujarat Titans",
        "logo": ""
      },
      "awayTeam": {
        "name": "Sunrisers Hyderabad",
        "logo": ""
      },
      "result": "Gujarat Titans won "
    },
    {
      "matchOrder": "MATCH 11",
      "venue": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow",
      "dateTime": "MAR, SAT 30 , 7:30 pm IST",
      "homeTeam": {
        "name": "Lucknow Super Giants",
        "logo": ""
      },
      "awayTeam": {
        "name": "Punjab Kings",
        "logo": ""
      },
      "result": "Lucknow Super Giants won "
    },
    {
      "matchOrder": "MATCH 10",
      "venue": "M Chinnaswamy Stadium, Bengaluru",
      "dateTime": "MAR, FRI 29 , 7:30 pm IST",
      "homeTeam": {
        "name": "Royal Challengers Bengaluru",
        "logo": ""
      },
      "awayTeam": {
        "name": "Kolkata Knight Riders",
        "logo": ""
      },
      "result": "Royal Challengers Bengaluru won "
    },
    {
      "matchOrder": "MATCH 9",
      "venue": "Sawai Mansingh Stadium, Jaipur",
      "dateTime": "MAR, THU 28 , 7:30 pm IST",
      "homeTeam": {
        "name": "Rajasthan Royals",
        "logo": ""
      },
      "awayTeam": {
        "name": "Delhi Capitals",
        "logo": ""
      },
      "result": "Rajasthan Royals won "
    },
    {
      "matchOrder": "MATCH 8",
      "venue": "Rajiv Gandhi International Stadium, Hyderabad",
      "dateTime": "MAR, WED 27 , 7:30 pm IST",
      "homeTeam": {
        "name": "Sunrisers Hyderabad",
        "logo": ""
      },
      "awayTeam": {
        "name": "Mumbai Indians",
        "logo": ""
      },
      "result": "Sunrisers Hyderabad won "
    },
    {
      "matchOrder": "MATCH 7",
      "venue": "MA Chidambaram Stadium, Chennai",
      "dateTime": "MAR, TUE 26 , 7:30 pm IST",
      "homeTeam": {
        "name": "Chennai Super Kings",
        "logo": ""
      },
      "awayTeam": {
        "name": "Gujarat Titans",
        "logo": ""
      },
      "result": "Chennai Super Kings won "
    },
    {
      "matchOrder": "MATCH 6",
      "venue": "M Chinnaswamy Stadium, Bengaluru",
      "dateTime": "MAR, MON 25 , 7:30 pm IST",
      "homeTeam": {
        "name": "Royal Challengers Bengaluru",
        "logo": ""
      },
      "awayTeam": {
        "name": "Punjab Kings",
        "logo": ""
      },
      "result": "Royal Challengers Bengaluru won "
    },
    {
      "matchOrder": "MATCH 5",
      "venue": "Narendra Modi Stadium, Ahmedabad",
      "dateTime": "MAR, SUN 24 , 7:30 pm IST",
      "homeTeam": {
        "name": "Gujarat Titans",
        "logo": ""
      },
      "awayTeam": {
        "name": "Mumbai Indians",
        "logo": ""
      },
      "result": "Gujarat Titans won "
    },
    {
      "matchOrder": "MATCH 4",
      "venue": "Sawai Mansingh Stadium, Jaipur",
      "dateTime": "MAR, SUN 24 , 3:30 pm IST",
      "homeTeam": {
        "name": "Rajasthan Royals",
        "logo": ""
      },
      "awayTeam": {
        "name": "Lucknow Super Giants",
        "logo": ""
      },
      "result": "Rajasthan Royals won "
    },
    {
      "matchOrder": "MATCH 3",
      "venue": "Eden Gardens, Kolkata",
      "dateTime": "MAR, SAT 23 , 7:30 pm IST",
      "homeTeam": {
        "name": "Kolkata Knight Riders",
        "logo": ""
      },
      "awayTeam": {
        "name": "Sunrisers Hyderabad",
        "logo": ""
      },
      "result": "Kolkata Knight Riders won "
    },
    {
      "matchOrder": "MATCH 2",
      "venue": "PCA New Stadium, Mullanpur",
      "dateTime": "MAR, SAT 23 , 3:30 pm IST",
      "homeTeam": {
        "name": "Punjab Kings",
        "logo": ""
      },
      "awayTeam": {
        "name": "Delhi Capitals",
        "logo": ""
      },
      "result": "Punjab Kings won "
    },
    {
      "matchOrder": "MATCH 1",
      "venue": "MA Chidambaram Stadium, Chennai",
      "dateTime": "MAR, FRI 22 , 8:00 pm IST",
      "homeTeam": {
        "name": "Chennai Super Kings",
        "logo": ""
      },
      "awayTeam": {
        "name": "Royal Challengers Bengaluru",
        "logo": ""
      },
      "result": "Chennai Super Kings won "
    }
  ]
const teamLogos = {
    "Chennai Super Kings": "https://scores.iplt20.com/ipl/teamlogos/CSK.png",
    "Royal Challengers Bengaluru": "https://scores.iplt20.com/ipl/teamlogos/aFPMviEPyJ1710927747rcb.png",
    "Mumbai Indians": "https://scores.iplt20.com/ipl/teamlogos/MI.png",
    "Rajasthan Royals": "https://scores.iplt20.com/ipl/teamlogos/RR.png",
    "Sunrisers Hyderabad": "https://scores.iplt20.com/ipl/teamlogos/SRH.png",
    "Kolkata Knight Riders": "https://scores.iplt20.com/ipl/teamlogos/KKR.png",
    "Lucknow Super Giants": "https://scores.iplt20.com/ipl/teamlogos/gPLvfvSC1X1711457972LSG.png",
    "Gujarat Titans": "https://scores.iplt20.com/ipl/teamlogos/GT.png",
    "Delhi Capitals": "https://scores.iplt20.com/ipl/teamlogos/DC.png",
    "Punjab Kings": "https://scores.iplt20.com/ipl/teamlogos/PBKS.png"
    // Add more team logos here as needed
};

const Events = () => {
    const [activeTab, setActiveTab] = useState('stats');
    const [matchResults, setMatchResults] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        fetchMatchResults();
    }, []);

    // const fetchMatchResults = async () => {
    //     try {
    //         const response = await fetch('/api/matchresults');
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch match results');
    //         }
    //         const data = await response.json();
    //         const matchesWithActiveTab = data.map(match => ({ ...match, activeTab: 'stats' }));

    //         setMatchResults(matchesWithActiveTab);
    //         setLoading(false); // Update loading state once data is fetched

    //     } catch (error) {
    //         console.error('Error fetching match results:', error);
    //     }
    // };
    const fetchMatchResults = async () => {
        try {
           
          
            const matchesWithActiveTab = sampleData.map(match => ({ ...match, activeTab: 'stats' }));

            setMatchResults(matchesWithActiveTab);
            setLoading(false); // Update loading state once data is fetched

        } catch (error) {
            console.error('Error fetching match results:', error);
        }
    };

    const handleTabClick = (matchIndex, tabId) => {
        setMatchResults(prevMatchResults => {
            const updatedMatchResults = [...prevMatchResults];
            updatedMatchResults[matchIndex].activeTab = tabId;
            return updatedMatchResults;
        });
    };

    return (
        <> 
         {loading ? (
         <Loader/>
        ) : (
        <div className='container ml-8 mt-20 flex flex-wrap gap-6'>
            {matchResults.map((match, index) => (
                <div key={index} className="w-[25rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="sm:hidden">
                        <label htmlFor={`tabs-${index}`} className="sr-only">Select tab</label>
                        <select id={`tabs-${index}`} className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Match</option>
                            <option>Venue</option>
                            <option>Results</option>
                        </select>
                    </div>
                    <ul className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" role="tablist">
                        <li className="w-full">
                            <button onClick={() => handleTabClick(index, 'stats')} type="button" role="tab" aria-controls={`stats-${index}`} aria-selected={match.activeTab === 'stats'} className={`inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${match.activeTab === 'stats' ? 'text-gray-900 dark:text-white' : ''}`}>Match</button>
                        </li>
                        <li className="w-full">
                            <button onClick={() => handleTabClick(index, 'about')} type="button" role="tab" aria-controls={`about-${index}`} aria-selected={match.activeTab === 'about'} className={`inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${match.activeTab === 'about' ? 'text-gray-900 dark:text-white' : ''}`}>Venue</button>
                        </li>
                        <li className="w-full">
                            <button onClick={() => handleTabClick(index, 'faq')} type="button" role="tab" aria-controls={`faq-${index}`} aria-selected={match.activeTab === 'faq'} className={`inline-block w-full p-4 rounded-se-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${match.activeTab === 'faq' ? 'text-gray-900 dark:text-white' : ''}`}>Results</button>
                        </li>
                    </ul>
                    <div className="border-t border-gray-200 dark:border-gray-600">
                        <div className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${match.activeTab === 'stats' ? 'block' : 'hidden'}`} id={`stats-${index}`} role="tabpanel" aria-labelledby={`stats-tab-${index}`}>
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex flex-col items-center h-40">
                                    <img src={teamLogos[match.homeTeam.name]} alt="Home Team Logo" className="w-20 mb-2 h-20" />
                                    <p className="text-xl font-semibold text-center w-36">{match.homeTeam.name}</p>
                                </div>
                                <img src={vs} alt='v/s' className="w-10" />
                                <div className="flex flex-col items-center h-40">
                                    <img src={teamLogos[match.awayTeam.name]} alt="Away Team Logo" className="w-20 mb-2 h-20" />
                                    <p className="text-xl font-semibold text-center w-36">{match.awayTeam.name}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-md text-gray-900"><strong>Date:</strong> {match.dateTime}</p>
                                <p className="text-md text-gray-900"><strong>Venue:</strong> {match.venue}</p>
                            </div>
                        </div>
                        <div className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${match.activeTab === 'about' ? 'block' : 'hidden'}`} id={`about-${index}`} role="tabpanel" aria-labelledby={`about-tab-${index}`}>
                            <div className="relative group">
                                <img src="https://img.freepik.com/free-photo/sport-football-arena-background_1409-5719.jpg?t=st=1715682039~exp=1715685639~hmac=88d6bfe0671c4462906aa9c50d206789369fc1623f30ad5e88886c38771aa748&w=740" alt='stadium' className="w-full h-auto rounded-lg" />
                                {/* Overlay layer */}
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 rounded-lg transition-opacity duration-300"></div>
                                {/* Square with arrow icon */}
                                <div className="absolute bottom-4 right-4 flex items-center justify-center bg-white opacity-0 group-hover:opacity-100 rounded-lg p-2 transition-opacity duration-300">
                                    <h1>{match.venue}</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-2 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 15v-3l8 4-8 4v-3H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v7a2 2 0 01-2 2h-6"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={`flex mt-10 items-center justify-center align-middle text-center p-4 bg-white rounded-lg dark:bg-gray-800 ${match.activeTab === 'faq' ? 'block' : 'hidden'}`} id={`faq-${index}`} role="tabpanel" aria-labelledby={`faq-tab-${index}`}>
                            <img src={trophy} alt='winner' className='w-40 justify-center items-center align-middle' />
                            <h1 className='font-bold text-xl'>{match.result}</h1>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )}
        </>
    );
};

export default Events;