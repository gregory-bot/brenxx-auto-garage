import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ReactStars from 'react-rating-stars-component';
const carRepairServices = [
  {
    id: 'crs1',
    title: 'Oil Change & Filter Replacement',
    description: 'Regular oil and filter changes to ensure optimal engine performance and longevity.',
    price: 350.00,
    image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'crs2',
    title: 'Brake Inspection & Repair',
    description: 'Complete brake service including pads, rotors, and brake fluid check.',
    price: 800.00,
    image: 'https://images.pexels.com/photos/6870299/pexels-photo-6870299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'crs3',
    title: 'Suspension & Steering Service',
    description: 'Shock absorber replacement and steering system alignment for smoother rides.',
    price: 1500.00,
    image: 'https://images.pexels.com/photos/8986137/pexels-photo-8986137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'crs4',
    title: 'Transmission Repair',
    description: 'Manual and automatic transmission diagnostics and repairs.',
    price: 3000.00,
    image: 'https://images.pexels.com/photos/4116203/pexels-photo-4116203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'crs5',
    title: 'Radiator & Cooling System Service',
    description: 'Coolant flush, radiator repair, and cooling system pressure test.',
    price: 1000.00,
    image: 'https://images.pexels.com/photos/6720532/pexels-photo-6720532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'crs6',
    title: 'Exhaust System Repair',
    description: 'Fixing mufflers, catalytic converters, and exhaust leaks.',
    price: 850.00,
    image: 'https://images.pexels.com/photos/17575953/pexels-photo-17575953/free-photo-of-close-up-of-car-engine.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'crs7',
    title: 'Wheel Alignment & Balancing',
    description: 'Precision wheel alignment and tire balancing for better fuel efficiency.',
    price: 700.00,
    image: 'https://images.pexels.com/photos/3807799/pexels-photo-3807799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'crs8',
    title: 'Clutch Replacement',
    description: 'Clutch plate and pressure plate replacement for smoother gear shifts.',
    price: 2500.00,
    image: 'https://images.pexels.com/photos/11074558/pexels-photo-11074558.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'crs9',
    title: 'Engine Overhaul',
    description: 'Complete engine disassembly, inspection, and rebuilding for better performance.',
    price: 5000.00,
    image: 'https://i.postimg.cc/jjmkwMTs/engine.jpg'
  },
  {
    id: 'crs10',
    title: 'Timing Belt Replacement',
    description: 'Replacing worn timing belts to prevent engine failure.',
    price: 1200.00,
    image: 'https://images.pexels.com/photos/188777/pexels-photo-188777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'crs11',
    title: 'Fuel System Cleaning',
    description: 'Cleaning fuel injectors and throttle body for improved fuel efficiency.',
    price: 900.00,
    image: 'https://images.pexels.com/photos/11890958/pexels-photo-11890958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'crs12',
    title: 'AC System Repair',
    description: 'AC gas refilling, compressor service, and leak fixing for optimal cooling.',
    price: 1350.00,
    image: 'https://images.pexels.com/photos/24286596/pexels-photo-24286596/free-photo-of-car-engine-and-parts-under-the-hood.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];


const mechElectricalServices = [
  {
    id: 'me1',
    title: 'Battery and Alternator Testing',
    description: 'Check battery health, voltage output, and alternator performance to prevent starting issues.',
    price: 450.00,
    image: 'https://media.istockphoto.com/id/1477647139/photo/mechanic-checking-car-battery.jpg?s=612x612&w=0&k=20&c=OCvuZZMsfbTlcx7o7P9IG4QKDcBywzzZNMIRMEChNsk='
  },
  {
    id: 'me2',
    title: 'Starter Motor Repair',
    description: 'Repair or replace faulty starter motors to ensure reliable engine cranking.',
    price: 1100.00,
    image: 'https://media.istockphoto.com/id/1453770972/photo/jumping-battery-car.jpg?s=612x612&w=0&k=20&c=8XxZCT-yPLJs2kDrZVIOf6MBxZrfyPjiabCp3dmR7rI='
  },
  {
    id: 'me3',
    title: 'Sensor and Fuse Replacement',
    description: 'Diagnose and replace malfunctioning sensors and blown fuses across all systems.',
    price: 300.00,
    image: 'https://media.istockphoto.com/id/1352125116/photo/car-service-worker-replacing-automobile-fuse-in-engine.jpg?s=612x612&w=0&k=20&c=0hkLmAkI_y063jdTCLlMjBrQ9SSkz1NNC2Zh2PfLgSU='
  },
  {
    id: 'me4',
    title: 'Engine Fault Diagnosis',
    description: 'Computerized diagnostics to identify engine issues quickly and accurately.',
    price: 600.00,
    image: 'https://media.istockphoto.com/id/1441159572/photo/african-female-professional-car-mechanic-repair-service-and-checking-car-engine-by.jpg?s=612x612&w=0&k=20&c=imtIYSuKU0hFimjSxSGjt9oFegAv4k1DVYfIkJdGDe0='
  },
  {
    id: 'me5',
    title: 'Ignition System Repair',
    description: 'Fixing spark plugs, coils, and ignition timing for smooth engine performance.',
    price: 750.00,
    image: 'https://media.istockphoto.com/id/2168506792/photo/close-up-of-hydraulic-valve-internal-in-engine-of-the-car-to-adjust-the-ignition.jpg?s=612x612&w=0&k=20&c=zWt4eq9u6a4tlDY6mcLiSythVgWUuvTvVUfyUB4FfLs='
  },
  {
    id: 'me6',
    title: 'Wiring & Electrical Fault Repair',
    description: 'Troubleshooting shorts, open circuits, and damaged wiring harnesses.',
    price: 950.00,
    image: 'https://media.istockphoto.com/id/1367507596/photo/electrician-master-repairs-cables-in-modern-car.jpg?s=612x612&w=0&k=20&c=WdsmJ7cqF8bVvqy90R_hOzUGForJc-ZaNDoAJ-Y6fSw='
  },
  {
    id: 'me7',
    title: 'Headlight & Taillight Electrical Fix',
    description: 'Repair or replace lighting circuits, switches, and bulb holders.',
    price: 250.00,
    image: 'https://media.istockphoto.com/id/497953085/photo/taillights-car-accident.jpg?s=612x612&w=0&k=20&c=C_my9NagAvuDecaYjsxHAh5Bae0LUsegEOOnSMTsODg='
  },
  {
    id: 'me8',
    title: 'Power Window & Lock Repair',
    description: 'Fix electrical faults in window regulators and central locking systems.',
    price: 700.00,
    image: 'https://media.istockphoto.com/id/1569692854/photo/auto-mechanic-remove-car-window-controls-panel-car-maintenance-service.jpg?s=612x612&w=0&k=20&c=3SqWBcsjk-PUDrb1xmd_56cDmz3-nEn9JSgT5hQsc8I='
  },
  {
    id: 'me9',
    title: 'ECU Programming & Replacement',
    description: 'Reprogramming or replacing engine control units for better performance and diagnostics.',
    price: 2800.00,
    image: 'https://media.istockphoto.com/id/1992953381/photo/car-computer-repair-shop.jpg?s=612x612&w=0&k=20&c=jCQEjWAAfd8Ssc49j9GghsAMGJ3WuYrXN15ywdLazbI='
  },
  {
    id: 'me10',
    title: 'Instrument Cluster Repair',
    description: 'Repair faulty speedometers, fuel gauges, and dashboard displays.',
    price: 1200.00,
    image: 'https://media.istockphoto.com/id/2161151225/photo/tangled-electronic-wiring-and-used-connectors-connector-for-wiring-used-spare-part-of-the.jpg?s=612x612&w=0&k=20&c=3yAB55mT54cu9oG4LufASv_p-NE-4-EgpxYD4WXxjvA='
  },
  {
    id: 'me11',
    title: 'Electric Cooling Fan Repair',
    description: 'Diagnose and repair fan motors, relays, and temperature sensors.',
    price: 650.00,
    image: 'https://media.istockphoto.com/id/1833004760/photo/the-engine-cooling-fan-is-prepared-for-installation-under-the-hood-of-a-car-machine.jpg?s=612x612&w=0&k=20&c=9N1OXXEham3qYUG-2riuJNEGUlCpJUpI4unf06T9CDM='
  },
  {
    id: 'me12',
    title: 'Charging System Inspection',
    description: 'Complete inspection of alternator, battery terminals, and voltage regulator.',
    price: 500.00,
    image: 'https://media.istockphoto.com/id/2176577170/photo/senior-woman-is-jumping-charger-cable-to-agm-battery-on-car.jpg?s=612x612&w=0&k=20&c=U0uju0Pc0sJsX04bbyNUbz5GmCBOTuDmOOl634NUsDs='
  }
];


const paintBodyServices = [
  {
    id: 'pb1',
    title: 'Full Body Respray',
    description: 'Complete respray of the entire vehicle with premium automotive paint.',
    price: 9500.00,
    image: 'https://i.postimg.cc/7hZDPxyC/paint.jpg'
  },
  {
    id: 'pb2',
    title: 'Scratch and Dent Removal',
    description: 'Removal of minor scratches and dents with paint blending for a flawless finish.',
    price: 1200.00,
    image: 'https://images.pexels.com/photos/12953618/pexels-photo-12953618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'pb3',
    title: 'Bumper Repair and Repaint',
    description: 'Repair cracked or scuffed bumpers and repaint to match original color.',
    price: 1800.00,
    image: 'https://i.postimg.cc/jjfHL0rv/IMG-20250227-WA0032-1.jpg'
  },
  {
    id: 'pb4',
    title: 'Panel Beating',
    description: 'Restore damaged panels to their original shape using precision tools.',
    price: 2200.00,
    image: 'https://images.pexels.com/photos/9827738/pexels-photo-9827738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'pb5',
    title: 'Paint Touch-Up',
    description: 'Small area paint correction and touch-up using color-matched paints.',
    price: 800.00,
    image: 'https://images.pexels.com/photos/5233261/pexels-photo-5233261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'pb6',
    title: 'Rust Removal & Treatment',
    description: 'Elimination of rust spots and application of anti-rust coating.',
    price: 1300.00,
    image: 'https://media.istockphoto.com/id/1174661121/photo/old-blue-car-with-a-rusty-wing-and-a-gray-wheel.jpg?s=612x612&w=0&k=20&c=ygrfiY4bltr2G5bpBfnk2XfbVbZhG5z6r-fkN5uRBT4='
  },
  {
    id: 'pb7',
    title: 'Car Polishing & Buffing',
    description: 'Restore paint shine and remove surface swirls with machine polishing.',
    price: 900.00,
    image: 'https://media.istockphoto.com/id/1060499948/photo/car-polish-wax-worker-hands-applying-protective-tape-before-polishing-buffing-and-polishing.jpg?s=612x612&w=0&k=20&c=SQJYF3HgmFi9N9NwB-gp_Q4UNIiKtP1h_VY2G79oG18='
  },
  {
    id: 'pb8',
    title: 'Paintless Dent Removal (PDR)',
    description: 'Remove minor dents without affecting factory paint using PDR tools.',
    price: 1400.00,
    image: 'https://media.istockphoto.com/id/2024631054/photo/process-of-paintless-dent-repair-on-car-body-the-mechanic-at-the-auto-shop-with-tools-to.jpg?s=612x612&w=0&k=20&c=DXLRexfsOLfN33qqt5Qoy4sGVqmCWCwmqJksmyMkeZM='
  },
  {
    id: 'pb9',
    title: 'Clear Coat Application',
    description: 'Protect your paint job with a durable and glossy clear coat layer.',
    price: 2000.00,
    image: 'https://media.istockphoto.com/id/1268954445/photo/mechanic-installs-car-paint-protection-film.jpg?s=612x612&w=0&k=20&c=vzOb4Rlb5KXv8NpYB7LOZyaJBO3F354XqULN1QKaBcI='
  },
  {
    id: 'pb10',
    title: 'Headlight Restoration',
    description: 'Buff and polish cloudy headlights to restore brightness and clarity.',
    price: 600.00,
    image: 'https://media.istockphoto.com/id/2151879559/photo/car-headlight-polishing.jpg?s=612x612&w=0&k=20&c=cAheknaTXgcyv-24Hyh9aUO6kSrYBm7rl-e7xhEk-B8='
  },
  {
    id: 'pb11',
    title: 'Custom Color Mixing',
    description: 'Personalized paint mixing service to match or create custom vehicle colors.',
    price: 1600.00,
    image: 'https://media.istockphoto.com/id/488177095/photo/set-of-3d-hatchback-car.jpg?s=612x612&w=0&k=20&c=KkjJk35I_yVbbNYGaQ1je_AnbXY4VKSpkGBsuXeHOCo='
  },
  {
    id: 'pb12',
    title: 'Body Panel Replacement',
    description: 'Replacement of severely damaged doors, fenders, or hood with paint-matched panels.',
    price: 3500.00,
    image: 'https://media.istockphoto.com/id/1358131581/photo/automobile-repairman-painter-hand-in-protective-glove-with-airbrush-pulverizer-painting-car.jpg?s=612x612&w=0&k=20&c=EqRUiuFY7nvP91EJwRMRIefvcnznazfP6Zindvanopw='
  },
  {
    id: 'pb13',
    title: 'Roof & Bonnet Respray',
    description: 'Repaint faded or damaged roof and bonnet with factory-grade finish.',
    price: 2800.00,
    image: 'https://media.istockphoto.com/id/952750538/photo/stains-on-the-hood.jpg?s=612x612&w=0&k=20&c=ooueitHxmBzNB7EizKGsNR0HMNUcrC9HNnu4LxgXDT4='
  },
  {
    id: 'pb14',
    title: 'Ceramic Coating',
    description: 'Protect your vehicle’s paint with a long-lasting ceramic shield.',
    price: 4800.00,
    image: 'https://i.postimg.cc/1XmwC8VY/IMG-20250228-WA0000.jpg'
  }
];



const diagnosticServices = [
  {
    id: 'vd1',
    title: 'Engine Diagnostics',
    description: 'Comprehensive engine scan to detect misfires, sensor faults, and performance issues.',
    price: 1800.00,
    image: 'https://media.istockphoto.com/id/1350239751/photo/car-diagnostic-service-and-electronics-repair.jpg?s=612x612&w=0&k=20&c=6xSgzMp9KJJ8lN0hC1UcuqXuuZMLNFCgCkcju-Q0BTU='
  },
  {
    id: 'vd2',
    title: 'Check Engine Light Inspection',
    description: 'Identify and resolve the reason behind your illuminated check engine light.',
    price: 1000.00,
    image: 'https://media.istockphoto.com/id/1181213164/vector/car-dashboard-warning-lights-icons-set-vector-illustration-image-vehicle-service-logo.jpg?s=612x612&w=0&k=20&c=lQCvj1bE1ZEJZDRH-ZCZqRClTgr6b3tBQYncdo9yBRU='
  },
  {
    id: 'vd3',
    title: 'ABS & Brake System Scan',
    description: 'Diagnose ABS faults and check brake system sensors for optimal safety.',
    price: 1500.00,
    image: 'https://media.istockphoto.com/id/1258023748/photo/car-disassembly-brake-disc-and-brake-caliper-removed-selective-focus.jpg?s=612x612&w=0&k=20&c=v4hWMgCJ-KG2l_m0UfTHf-LPFCYkPCUzg-v1fsU5Oi8='
  },
  {
    id: 'vd4',
    title: 'Transmission Diagnostics',
    description: 'Analyze transmission shifting issues and perform error code analysis.',
    price: 2000.00,
    image: 'https://media.istockphoto.com/id/2169327387/photo/automatic-change-of-brake-fluid-in-a-car-service.jpg?s=612x612&w=0&k=20&c=UCMNwqei059A9lRRBsFHjI6C_dyYe5vClHaBuf8w-Xs='
  },
  {
    id: 'vd5',
    title: 'Battery & Charging System Test',
    description: 'Check battery health, alternator output, and charging system performance.',
    price: 1200.00,
    image: 'https://media.istockphoto.com/id/1213122410/photo/technician-measure-voltage-of-battery-in-the-car-at-service-station.jpg?s=612x612&w=0&k=20&c=GDNklQ8acHuFrsCcOXe2i4wSUqrzdx8kTed7rFPQKc8='
  },
  {
    id: 'vd6',
    title: 'OBD-II Code Scan',
    description: 'On-board diagnostics scan for trouble codes with professional analysis.',
    price: 800.00,
    image: 'https://media.istockphoto.com/id/2203733486/photo/obd-or-obd-ii-scanner-in-use-by-technician-automotive-diagnostic-tool-in-use-for-scanning.jpg?s=612x612&w=0&k=20&c=4vwIZAGsHRC1pCWRySwZ55G5_EPAXSrN3u_BzFtDb0c='
  },
  {
    id: 'vd7',
    title: 'Fuel System Diagnostics',
    description: 'Evaluate fuel pressure, injector performance, and fuel economy issues.',
    price: 1600.00,
    image: 'https://media.istockphoto.com/id/2188163252/photo/car-battery-maintenance-with-digital-overlay.jpg?s=612x612&w=0&k=20&c=JxQdtW9kEMMnRJ01c5HgZXw4-mUsjb0ih7-SgnWmFx8='
  },
  {
    id: 'vd8',
    title: 'Airbag System Scan',
    description: 'Check SRS system for faults and ensure airbag readiness.',
    price: 1400.00,
    image: 'https://media.istockphoto.com/id/1599919768/photo/air-bag-sign-on-the-steering-wheel.jpg?s=612x612&w=0&k=20&c=IqxCnhkeN5oM4JZy8KQT3GCd5xuGgnTvLrZaFa7pp6M='
  },
  {
    id: 'vd9',
    title: 'Emission System Check',
    description: 'Verify your vehicle meets emission standards and resolve pollution-related issues.',
    price: 1500.00,
    image: 'https://media.istockphoto.com/id/2083930218/photo/auto-mechanic-monitor-to-check-and-fixed-car-air-conditioner-system-in-car-garage-service-car.jpg?s=612x612&w=0&k=20&c=Ho-reXJyKDs_gZdbn8X4HRYSFLy5uJtWxYmwXOYrq_0='
  },
  {
    id: 'vd10',
    title: 'Cooling System Diagnostics',
    description: 'Scan radiator, thermostat, and coolant sensors for overheating issues.',
    price: 1300.00,
    image: 'https://media.istockphoto.com/id/1168556251/photo/check-car-air-conditioning-system-refrigerant-recharge.jpg?s=612x612&w=0&k=20&c=RApZuCMS0gYqD12FBpsfGL5Rn4-InLkeBQJvBMtdegQ='
  },
  {
    id: 'vd11',
    title: 'Sensor & Module Diagnostics',
    description: 'Full diagnostic of electronic control modules and vehicle sensors.',
    price: 1800.00,
    image: 'https://media.istockphoto.com/id/1330016219/photo/auto-electrician.jpg?s=612x612&w=0&k=20&c=gKDsGUN3ieQVskpuLJoKsk0LdOhaC7z4mrSMnWXlRhY='
  },
  {
    id: 'vd12',
    title: 'Steering & Suspension Diagnostic',
    description: 'Identify issues in steering electronics and suspension modules.',
    price: 1700.00,
    image: 'https://media.istockphoto.com/id/2002640073/photo/car-engine-suspension-during-vehicle-maintenance.jpg?s=612x612&w=0&k=20&c=D7gpRn6p7eBJ0tYFGpxk7Tz1SQ4IGTmQUX0tsZRXPKU='
  },
  {
    id: 'vd13',
    title: 'Climate Control System Check',
    description: 'Diagnose HVAC system errors and ensure consistent cabin temperature.',
    price: 1000.00,
    image: 'https://media.istockphoto.com/id/1901547765/photo/car-air-conditioning-repair-technician-man-checks-car-air-conditioning-system-refrigerant.jpg?s=612x612&w=0&k=20&c=RgMevlWS3ULPGa9fr75cXiva8urEmBg2jm3cM24-M1M='
  },
  {
    id: 'vd14',
    title: 'Pre-Purchase Diagnostic Inspection',
    description: 'Get a full digital diagnostic report before buying a used vehicle.',
    price: 2500.00,
    image: 'https://media.istockphoto.com/id/1310795165/photo/auto-mechanic-using-car-diagnostic-tool.jpg?s=612x612&w=0&k=20&c=SKHWqGA2sGnbcj6gBM7vfa5rAVBTA9e-US1w8q_6Px4='
  }
];


const accidentRepairServices = [
  {
    id: 'ar1',
    title: 'Full Body Damage Repair',
    description: 'Complete repair and restoration of vehicle body after accidents.',
    price: 8000.00,
    image: 'https://i.postimg.cc/BvXbqB45/after-acc.jpg'
  },
  {
    id: 'ar2',
    title: 'Bumper Replacement & Repair',
    description: 'Fixing or replacing damaged front and rear bumpers.',
    price: 3000.00,
    image: 'https://media.istockphoto.com/id/1387858012/photo/new-plastic-car-bumper-on-white-background.jpg?s=612x612&w=0&k=20&c=YrMbOpFL7v3ubWRYfEcWAudyrITw3iaWzxWglYuaZLk='
  },
  {
    id: 'ar3',
    title: 'Fender Repair',
    description: 'Straightening and refinishing dented or crumpled fenders.',
    price: 2500.00,
    image: 'https://media.istockphoto.com/id/183413919/photo/crashed-car.jpg?s=612x612&w=0&k=20&c=pNynsWFmbQzbGRAvLNBH6ZqsuOtLUIiJpO0f4KZDQCI='
  },
  {
    id: 'ar4',
    title: 'Windshield Replacement',
    description: 'Complete windshield replacement with high-quality glass.',
    price: 3500.00,
    image: 'https://media.istockphoto.com/id/1432352474/photo/in-the-aftermath-of-an-accident-near-my-home-automobile-service-special-workers-replaced-the.jpg?s=612x612&w=0&k=20&c=bPPO7Tf0wCOXClhfRaMqDTN6hfZ2Odch-Ava4tXREUE='
  },
  {
    id: 'ar5',
    title: 'Headlight & Taillight Repair',
    description: 'Fix or replace cracked or broken lights due to collision.',
    price: 1800.00,
    image: 'https://media.istockphoto.com/id/2197106106/photo/severely-damaged-rear-car-panel-and-taillight.jpg?s=612x612&w=0&k=20&c=nfkxHo6oDFVMy_iJw_zb87qk-Km-SGQj28wOCkmr7QI='
  },
  {
    id: 'ar6',
    title: 'Chassis Straightening',
    description: 'Realign the vehicle frame for structural integrity.',
    price: 7000.00,
    image: 'https://media.istockphoto.com/id/2170656686/photo/close-up-of-car-underbody-on-the-lift-at-car-service-station.jpg?s=612x612&w=0&k=20&c=t3ivZrsOPdaqDnAqxlSnDhaGTf0aAgmZelhppDmd0ts='
  },
  {
    id: 'ar7',
    title: 'Paintless Dent Removal',
    description: 'Smooth out minor dents without needing paintwork.',
    price: 2200.00,
    image: 'https://media.istockphoto.com/id/2158743215/photo/a-photo-of-paintless-dent-removal-glue-pucks-repairing-hail-damage-of-the-silver-car-in-the.jpg?s=612x612&w=0&k=20&c=1B72m9hBWLeumwWYhLptPlsSDP4JSTJUQ2d-Y_bZTRE='
  },
  {
    id: 'ar8',
    title: 'Panel Beating',
    description: 'Professional reshaping and aligning of body panels.',
    price: 4000.00,
    image: 'https://media.istockphoto.com/id/537887872/photo/auto-body-repair-series-fixing-car-body.jpg?s=612x612&w=0&k=20&c=Em_OSY4NLebT12DmuW862cAESGtVnGcPssY6bqnHnzk='
  },
  {
    id: 'ar9',
    title: 'Crash Sensor Reset',
    description: 'Recalibrate and reset safety systems post-accident.',
    price: 2000.00,
    image: 'https://media.istockphoto.com/id/2183350152/photo/close-up-of-car-dashboard-speedometer-and-tachometer-modern-car-interior.jpg?s=612x612&w=0&k=20&c=G18iZYh91r3JiFcVPHHUu0KB-uAqzyeCu_y0Bl4jcXg='
  },
  {
    id: 'ar10',
    title: 'Airbag System Reinstallation',
    description: 'Install new airbags and test system functionality.',
    price: 5000.00,
    image: 'https://media.istockphoto.com/id/1924376056/photo/modern-car-showing-airbag-inside.jpg?s=612x612&w=0&k=20&c=vkbhygqQvzH8FW0hRXoAc5didsK8SErQjSM_MYZB9Gk='
  },
  {
    id: 'ar11',
    title: 'Paint Restoration',
    description: 'Repaint accident-affected areas to match factory finish.',
    price: 3500.00,
    image: 'https://i.postimg.cc/7hZDPxyC/paint.jpg'
  },
  {
    id: 'ar12',
    title: 'Insurance Claim Support',
    description: 'Assistance with documentation and repair process for claims.',
    price: 0.00,
    image: 'https://media.istockphoto.com/id/2062364285/photo/car-accident-and-insurance-money.jpg?s=612x612&w=0&k=20&c=b1OJx2-T3L9EIyM9mXcj5zJco_eaPHdBojJs2UMY01g='
  },
  {
    id: 'ar13',
    title: 'Wheel Alignment Check',
    description: 'Ensure accurate wheel alignment post-collision.',
    price: 1500.00,
    image: 'https://media.istockphoto.com/id/1469093559/photo/at-a-repair-shop-a-car-mechanic-tightens-the-suspension-of-an-elevated-vehicle-with-a-spanner.jpg?s=612x612&w=0&k=20&c=xBh7ie0svqSy9DxvVPFo44uHSn5as1NA5ulPxUSwwDQ='
  },
  {
    id: 'ar14',
    title: 'Side Mirror Repair',
    description: 'Replace or fix damaged side mirrors from accidents.',
    price: 1200.00,
    image: 'https://media.istockphoto.com/id/2182443174/photo/car-mirror-is-broken-need-reper.jpg?s=612x612&w=0&k=20&c=diwxVUntOqDvLcQ4RsMySbXgJY-prhxrFMt3EIoflfU='
  },
  {
    id: 'ar15',
    title: 'Underbody Inspection',
    description: 'Inspect and repair any underbody damage post-crash.',
    price: 2500.00,
    image: 'https://media.istockphoto.com/id/1140032073/photo/view-of-car-undercarriage-when-lifted-on-hydraulic-lift-in-a-workshop-during-inspection.jpg?s=612x612&w=0&k=20&c=ALR6ttrUP9866LAI0aaiRA_1UsBAR6tvSqK1xSVaNyI='
  },
  {
    id: 'ar16',
    title: 'Post-Repair Road Test',
    description: 'Road test to ensure vehicle drives smoothly after repairs.',
    price: 0.00,
    image: 'https://media.istockphoto.com/id/1448524803/vector/failure-in-education-do-not-pass-car-exam-flat-cartoon-vector-illustration-adolescent-girl.jpg?s=612x612&w=0&k=20&c=13mbshv3IoWZZrnTh6Q2h8jB14Ru_2k_BOrnKmIvd_8='
  }
];


const maintenanceServices = [
  {
    id: 'ms1',
    title: 'Engine Oil Change',
    description: 'Complete engine oil drain and refill with quality oil and filter.',
    price: 2500.00,
    image: 'https://media.istockphoto.com/id/652660470/photo/auto-mechanic-service-and-repair.jpg?s=612x612&w=0&k=20&c=bEQwVRbOLw1i5w5q8Iz6llAKFEokFDZq5mLFq_khZ-o='
  },
  {
    id: 'ms2',
    title: 'Brake Inspection & Replacement',
    description: 'Check and replace brake pads, discs, and brake fluid if necessary.',
    price: 3000.00,
    image: 'https://media.istockphoto.com/id/2197500427/photo/close-up-of-car-disc-brake-in-workshop.jpg?s=612x612&w=0&k=20&c=n5aDbbqinJcLA-wW0Z3x7uikdndBZ5PdqlDq9KabzXM='
  },
  {
    id: 'ms3',
    title: 'Air Filter Replacement',
    description: 'Replace engine air filter to maintain clean airflow and performance.',
    price: 1000.00,
    image: 'https://media.istockphoto.com/id/2202614431/photo/comparison-between-new-air-filter-and-used-air-filter-on-car-engine-bay.jpg?s=612x612&w=0&k=20&c=Z1Ai-f88h3yGPCzMHLyDzkLU2zyft6ESt1a0os8Te7g='
  },
  {
    id: 'ms4',
    title: 'Battery Health Check',
    description: 'Test battery performance and clean terminals; replace if needed.',
    price: 1800.00,
    image: 'https://media.istockphoto.com/id/1251530338/photo/auto-mechanic-working-in-the-garage-service-and-maintenance-and-car-maintenance.jpg?s=612x612&w=0&k=20&c=yWF31I_0KILUboJoEDgImlyKOhqPcoMZAsnRNDV6Zfk='
  },
  {
    id: 'ms5',
    title: 'Coolant Flush & Replacement',
    description: 'Flush out old coolant and refill with high-grade antifreeze.',
    price: 2000.00,
    image: 'https://media.istockphoto.com/id/2128861985/photo/focused-on-the-automotive-industry-within-the-contemporary-new-automobile-engine-room-machine.jpg?s=612x612&w=0&k=20&c=JPzV3j-Y_UlBnMFADJtvEvcGHZYJlVkXs1C1g-GkxVg='
  },
  {
    id: 'ms6',
    title: 'Tire Rotation & Pressure Check',
    description: 'Rotate tires and ensure correct pressure for even wear.',
    price: 1500.00,
    image: 'https://media.istockphoto.com/id/1086003468/photo/the-refill-pressure-head-and-black-tyre-with-alloy-wheel-at-car-service-shop-center.jpg?s=612x612&w=0&k=20&c=ADGm5tEwEgdKIHgotXqWPLpIlseA8qPteQEkx_8kWjM='
  },
  {
    id: 'ms7',
    title: 'Spark Plug Replacement',
    description: 'Change spark plugs to improve fuel efficiency and ignition.',
    price: 2200.00,
    image: 'https://media.istockphoto.com/id/1258125364/photo/replacement-of-spark-plugs-in-a-modern-engine.jpg?s=612x612&w=0&k=20&c=3PxkCoppC8g7f1nWWn-GBiZjQocjz7sLuVj2Wpx8iJ8='
  },
  {
    id: 'ms8',
    title: 'Wiper Blade Replacement',
    description: 'Install new wiper blades for clearer visibility during rain.',
    price: 800.00,
    image: 'https://media.istockphoto.com/id/2149245967/photo/close-up-of-a-black-car-wiper-car-detail.jpg?s=612x612&w=0&k=20&c=9j2o2AbV2OiMoNcHRtElQso8c1jBj_WZrOWjVL1Vab0='
  },
  {
    id: 'ms9',
    title: 'Transmission Fluid Change',
    description: 'Replace old transmission fluid to ensure smooth gear shifts.',
    price: 3500.00,
    image: 'https://media.istockphoto.com/id/2164910526/photo/automatic-change-of-brake-fluid-in-a-car-service.jpg?s=612x612&w=0&k=20&c=DP9ZJvqYojjKPzeMjwddP4wCqaOTEbrOEWYYXQI7lxQ='
  },
  {
    id: 'ms10',
    title: 'Full Service Inspection',
    description: 'Complete multi-point inspection with full-service tune-up.',
    price: 5000.00,
    image: 'https://media.istockphoto.com/id/2203463408/photo/cropped-shot-of-mechanic-man-measuring-voltage-on-car-battery-in-auto-service.jpg?s=612x612&w=0&k=20&c=eltxl919IE798MF9gfiII1qQlu9tNzA0BswRKYlPJXo='
  },
  {
    id: 'ms11',
    title: 'Timing Belt Inspection',
    description: 'Check and replace timing belt if worn to prevent engine failure.',
    price: 4000.00,
    image: 'https://media.istockphoto.com/id/1962526551/photo/twin-cam-engine-car-with-pulley-wheels-and-cam-belt.jpg?s=612x612&w=0&k=20&c=XD5Pi_BhVdQ18-CBz-gCdqrP6AIliq2ieQdPaQiyy3Y='
  },
  {
    id: 'ms12',
    title: 'Wheel Alignment',
    description: 'Adjust the angles of wheels to the manufacturer’s specifications for optimal handling.',
    price: 1700.00,
    image: 'https://media.istockphoto.com/id/463462731/photo/computerized-wheel-alignment-machine-clamp.jpg?s=612x612&w=0&k=20&c=1TSPgkpZYY8ha69Fbp0Ny9oaAPtgGexcwmBbVXVB0_w='
  },
  {
    id: 'ms13',
    title: 'Exhaust System Check',
    description: 'Inspect exhaust components for blockages, rust, or leaks and replace if required.',
    price: 2500.00,
    image: 'https://media.istockphoto.com/id/2197738784/photo/car-exhaust-pipe-in-garage.jpg?s=612x612&w=0&k=20&c=i-hjL6-Mq23w5-Ky9PR6gcRMATBWXJTbMR_gsVbVNH8='
  },
  {
    id: 'ms14',
    title: 'Cabin Filter Replacement',
    description: 'Install a new cabin air filter for improved air quality inside your car.',
    price: 1200.00,
    image: 'https://media.istockphoto.com/id/2201114254/photo/a-mechanic-changes-the-cabin-air-filter-of-a-car-dirty-car-cabin-air-filter-timely-car-service.jpg?s=612x612&w=0&k=20&c=_djoF5aU_5g7ZWjGqsa7AaGiCA8M341HTMH_hWw28M4='
  }
];  

const tireServices = [
  {
    id: 'ts1',
    title: 'Tire Fitting',
    description: 'Professional installation of new tires on all vehicle types.',
    price: 1500.00,
    image: 'https://media.istockphoto.com/id/701032426/photo/car-mechanic-hands-replace-brakes-in-garage.jpg?s=612x612&w=0&k=20&c=reD240itLvL0Y3N5NNKm7s9k3G6EkdioEdWYXfEzJAw='
  },
  {
    id: 'ts2',
    title: 'Tire Balancing',
    description: 'Ensure smooth driving by balancing tire weight evenly.',
    price: 1200.00,
    image: 'https://media.istockphoto.com/id/1192910232/photo/mechanic-man-working-on-balancing-machine.jpg?s=612x612&w=0&k=20&c=EE4o-gzygJnhph4-w5J2Mjfi-5B1sh9iBCgE20qLbHI='
  },
  {
    id: 'ts3',
    title: 'Puncture Repairs',
    description: 'Quick and reliable puncture repairs for all tires.',
    price: 800.00,
    image: 'https://media.istockphoto.com/id/2170826024/photo/flat-tire-car-damage-insurance.jpg?s=612x612&w=0&k=20&c=TAOJxN1JGybeTqfHRvUNzWvTznPfmjDiVqQ50TnOjbQ='
  },
  {
    id: 'ts4',
    title: 'Wheel Alignment',
    description: 'Precise wheel alignment to improve vehicle handling.',
    price: 2000.00,
    image: 'https://media.istockphoto.com/id/2106472694/photo/brake-pad-and-tire-change-at-auto-repair-shop.jpg?s=612x612&w=0&k=20&c=G4-me_2NPW0Rpl7pS-HKlGv3YiRHhqd0EWwd3sXSMl4='
  },
  {
    id: 'ts5',
    title: 'Wheel Rotation',
    description: 'Rotate tires to promote even tread wear.',
    price: 1000.00,
    image: 'https://media.istockphoto.com/id/1077225004/photo/seasonal-wheels-replacement.jpg?s=612x612&w=0&k=20&c=19cv4cEJeOA89vyzR4ohG92n-3pyCXaHwklJiWIw58I='
  },
  {
    id: 'ts6',
    title: 'Nitrogen Inflation',
    description: 'Inflate tires with nitrogen for better performance and pressure retention.',
    price: 500.00,
    image: 'https://media.istockphoto.com/id/1974865020/photo/a-pressure-gauge-that-determines-tire-pressure-tire-inflation-process.jpg?s=612x612&w=0&k=20&c=pogcQrSoqh5RMcXIoE1y0vYLzAAWw4HWgXzO83gwNYU='
  },
  {
    id: 'ts7',
    title: 'Tire Inspection',
    description: 'Comprehensive tire inspection for safety and wear issues.',
    price: 600.00,
    image: 'https://media.istockphoto.com/id/1394550566/photo/a-auto-mechanic-inflates-a-tire-with-an-air-tire-inflating-gun.jpg?s=612x612&w=0&k=20&c=LsApAdx8uRrcFW3QRDGzgJRo1K0QO5DSRuQ5uTAXMYg='
  },
  {
    id: 'ts8',
    title: 'Tire Pressure Check',
    description: 'Ensure correct tire pressure for optimal performance and safety.',
    price: 300.00,
    image: 'https://media.istockphoto.com/id/1335957246/photo/close-up-of-mechanics-hand-checking-the-air-pressure-of-a-tyre-in-auto-repair-service.jpg?s=612x612&w=0&k=20&c=h5H32CSUZw6-XkaGX3MzVcnK37UEuZDDRI1MZBtzNMA='
  },
  {
    id: 'ts9',
    title: 'Rim Repairs',
    description: 'Fix damaged or bent rims to restore wheel balance.',
    price: 2500.00,
    image: 'https://media.istockphoto.com/id/2203289482/photo/multi-colored-paints-on-a-car-car-sheet-metal-elements-covered-with-rust-cheap-car-repair.jpg?s=612x612&w=0&k=20&c=qKM5Gd3fXR1WdCd67HseizNyyLwOgg718pKZCijOZqI='
  },
  {
    id: 'ts10',
    title: 'Winter Tire Installation',
    description: 'Install winter tires for better traction in snowy conditions.',
    price: 1800.00,
    image: 'https://media.istockphoto.com/id/1177501406/photo/new-tyre-for-car-or-lorry-held-by-worker-of-contemporary-machine-repair-service.jpg?s=612x612&w=0&k=20&c=ixzo9izDDsbCjJwggpcMna2mpV4EQ8Cn3apKn0JsSWw='
  },
  {
    id: 'ts11',
    title: 'Performance Tire Upgrade',
    description: 'Upgrade to high-performance tires for enhanced driving.',
    price: 3500.00,
    image: 'https://media.istockphoto.com/id/174572916/photo/dyno-testing.jpg?s=612x612&w=0&k=20&c=cUBfetodAXww4eHlmlMDlubHHBpVsHvvvfpZlCiRa8Y='
  },
  {
    id: 'ts12',
    title: 'Tire Storage',
    description: 'Secure storage of off-season tires.',
    price: 1000.00,
    image: 'https://media.istockphoto.com/id/1328185586/photo/group-of-new-tires-for-sale-at-a-tire-store.jpg?s=612x612&w=0&k=20&c=4uwl-BM8TN5sR_y8QBlliaWrT6iH95vuBli_lFxMirk='
  },
  {
    id: 'ts13',
    title: 'Tire Bead Sealing',
    description: 'Seal the tire bead to stop slow leaks around the rim.',
    price: 950.00,
    image: 'https://media.istockphoto.com/id/1201294077/photo/car-tire-repair.jpg?s=612x612&w=0&k=20&c=fQvw7g4_BqV9SMD3Nmib6BM4Sbhhoqh6_vSLxeTbYCY='
  },
  {
    id: 'ts14',
    title: 'Run-Flat Tire Service',
    description: 'Special care and replacement of run-flat tire systems.',
    price: 2200.00,
    image: 'https://media.istockphoto.com/id/1367623001/photo/closeup-of-a-deflated-or-flat-tire-that-has-been-neglected-for-days-of-an-automobile-parked.jpg?s=612x612&w=0&k=20&c=W5d0MINawYUExRM3crK0cAXyOzh01Mg4Vai_NBjWvsU='
  },
  {
    id: 'ts15',
    title: 'Valve Stem Replacement',
    description: 'Replace old or leaking valve stems during tire service.',
    price: 400.00,
    image: 'https://media.istockphoto.com/id/2078102146/photo/detail-of-the-valve-with-black-cover-on-silver-wheel-of-the-car.jpg?s=612x612&w=0&k=20&c=D7qVmzU6uabZTVT5jHwDo1M3aFBR-bkK6AiF-AOwMcg='
  },
  {
    id: 'ts16',
    title: 'Flat Tire Rescue',
    description: 'On-site flat tire rescue and temporary fixes.',
    price: 2000.00,
    image: 'https://media.istockphoto.com/id/1324661234/photo/belt-hook-on-the-tire-of-the-towed-car.jpg?s=612x612&w=0&k=20&c=BShaE59Gk2dugGAoKeqNBP4fDvzBJQ6NbDHIQxk5_7k='
  }
];


const vehicleDetailingAndTuningServices = [
  {
    id: 'vd1',
    title: 'Full Body Wash',
    description: 'Thorough cleaning of the vehicle’s exterior body and wheels.',
    price: 1200.00,
    image: 'https://i.postimg.cc/J0xcMNWL/IMG-20250227-WA0039.jpg'
  },
  {
    id: 'vd2',
    title: 'Engine Detailing',
    description: 'Deep cleaning and dressing of engine bay with safe products.',
    price: 2000.00,
    image: 'https://media.istockphoto.com/id/2178053789/photo/blue-collar-worker-work-at-car-service-workshop.jpg?s=612x612&w=0&k=20&c=cnxoSBc7aYQKE-Zefq_8qbsdt6X7JIAkTvj1lhKg__4='
  },
  {
    id: 'vd3',
    title: 'Interior Deep Clean',
    description: 'Vacuuming, dusting, and shampooing of seats and carpets.',
    price: 2200.00,
    image: 'https://media.istockphoto.com/id/853745938/photo/worker-cleaning-seat-inside-the-car.jpg?s=612x612&w=0&k=20&c=2oLDzQZKMYKbg8VeHaZx1-m_9TyP8DNI0qL2YMnVvkU='
  },
  {
    id: 'vd4',
    title: 'Leather Seat Conditioning',
    description: 'Clean and condition leather or synthetic seats for durability and shine.',
    price: 2000.00,
    image: 'https://images.pexels.com/photos/18198185/pexels-photo-18198185/free-photo-of-black-leather-car-seat.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'vd5',
    title: 'Turbo Installation',
    description: 'Boost performance by installing a custom turbocharger kit.',
    price: 15000.00,
    image: 'https://media.istockphoto.com/id/1473402444/photo/turbo-charger-on-race-car-engine.jpg?s=612x612&w=0&k=20&c=15IaSTU9hquzK8BTp4i3BcZloAYMASKxbSmQ95Y1NBo='
  },
  {
    id: 'vd6',
    title: 'ECU Remapping',
    description: 'Tuning your ECU for optimal performance, fuel efficiency, or torque.',
    price: 8000.00,
    image: 'https://media.istockphoto.com/id/1158234390/photo/two-young-car-mechanics-colleagues-servicing-the-car.jpg?s=612x612&w=0&k=20&c=UWzUmHiPq6xqn4iwU22O5lCuWTHWW1Hv9gbdLlQwERg='
  },
  {
    id: 'vd7',
    title: 'Seat Upgrade & Custom Covers',
    description: 'Upgrade your vehicle’s comfort with seat padding and stylish covers.',
    price: 3500.00,
    image: 'https://media.istockphoto.com/id/1039113102/photo/covers-for-car-seats-in-store.jpg?s=612x612&w=0&k=20&c=cDuriaZRqxG6TwLczCCxAffcFEeMb0dIrTXJCF7mgMo='
  },
  {
    id: 'vd8',
    title: 'Dashboard Polishing',
    description: 'Clean and polish dashboard and trims to restore shine.',
    price: 900.00,
    image: 'https://media.istockphoto.com/id/1990168945/photo/modern-car-interior-dashboard.jpg?s=612x612&w=0&k=20&c=EcfzFJj4uTQHfsY4qAlfsNbxjSrfamFPHH1HL02h2X0='
  },
  {
    id: 'vd9',
    title: 'Tire Dressing',
    description: 'Restore deep black look and protect tires from cracking.',
    price: 700.00,
    image: 'https://media.istockphoto.com/id/1054839056/photo/car-mechanic-changes-tires-in-the-repair-shop.jpg?s=612x612&w=0&k=20&c=KlJVrYnbGrlz2KZqPjV8g7Borot_7e6s-ZFXRaSavus='
  },
  {
    id: 'vd10',
    title: 'Glass & Mirror Coating',
    description: 'Hydrophobic coating on all glass for rain repellency and visibility.',
    price: 1300.00,
    image: 'https://media.istockphoto.com/id/1439468451/photo/rear-view-mirror-or-door-mirror-of-gray-car.jpg?s=612x612&w=0&k=20&c=7bdtY5diG2sjOgZpysBjiTeoAavXzVpxSxt9Jqw_mk8='
  },
  {
    id: 'vd11',
    title: 'Performance Air Intake Upgrade',
    description: 'Install a high-flow cold air intake for better throttle response.',
    price: 4500.00,
    image: 'https://media.istockphoto.com/id/1193036945/photo/air-filter-with-turbocharger-in-racing-car-engine.jpg?s=612x612&w=0&k=20&c=s6n5iYiN64MzoboqRAVpBJw5MxrkO7CZTD8aL1CvdRY='
  },
  {
    id: 'vd12',
    title: 'Exhaust System Enhancement',
    description: 'Sporty sound and improved airflow with custom exhaust.',
    price: 7000.00,
    image: 'https://media.istockphoto.com/id/1185435839/photo/image-of-car-in-process-of-replacement-new-tire-in-repair-shop.jpg?s=612x612&w=0&k=20&c=USEQSMfd7TpudHhmrZJyOK0h0RSmKDHAVvlBetDa-kM='
  },
  {
    id: 'vd13',
    title: 'Interior LED Ambient Lighting',
    description: 'Install multicolor interior LED strips for a premium cabin vibe.',
    price: 1800.00,
    image: 'https://media.istockphoto.com/id/627583910/photo/winter-driving.jpg?s=612x612&w=0&k=20&c=BccA_9QNMMBox3Ki9h7ip0hQgPBM2O_KuCfkPlqFfw4='
  },
  {
    id: 'vd14',
    title: 'Paint Correction & Buffing',
    description: 'Removes swirl marks and brings back showroom shine.',
    price: 3000.00,
    image: 'https://media.istockphoto.com/id/1174973760/photo/auto-detailing-car.jpg?s=612x612&w=0&k=20&c=5YovpqlLv3i7DgCpzoFpOE6mV53rFUo3pw0ooFtmlcg='
  },
  {
    id: 'vd15',
    title: 'Wheel Alignment & Balancing',
    description: 'Ensure proper handling and tire life with precision alignment.',
    price: 2500.00,
    image: 'https://media.istockphoto.com/id/1227609881/photo/wheel-alignment-equipment-on-a-car-wheel-in-a-repair-station.jpg?s=612x612&w=0&k=20&c=Vyi7sbyW2D4XtMkGjbssZBKYF645KiKPXbo_GUxXOAc='
  },
  {
    id: 'vd16',
    title: 'Complete Comfort & Performance Package',
    description: 'Includes detailing, seat conditioning, ambient lighting & ECU tune.',
    price: 20000.00,
    image: 'https://media.istockphoto.com/id/1466769217/photo/tourists-in-safari-off-road-vehicle-exploring-national-park-in-kenya-east-africa.jpg?s=612x612&w=0&k=20&c=lrs_3TtUiaWMQ8jQEtau7bfMxFw6gnnxzH1mzw1lUB0='
  }
];


const brakeAndSuspensionServices = [
  {
    id: 'bs1',
    title: 'Brake Pad Replacement',
    description: 'Replace worn brake pads with high-performance options.',
    price: 3000.00,
    image: 'https://media.istockphoto.com/id/1820437580/photo/used-car-brake-pads-in-the-hands-of-a-mechanic-with-brake-discs-and-brake-calipers-on-the.jpg?s=612x612&w=0&k=20&c=joXC4aiyu-dBYLaZNOLZqDtBdmKT_obrG_94ozvpB2o='
  },
  {
    id: 'bs2',
    title: 'Brake Fluid Flush',
    description: 'Remove old fluid and replace with manufacturer-approved brake fluid.',
    price: 1200.00,
    image: 'https://media.istockphoto.com/id/2150924580/photo/dusty-red-car-in-garage-for-repair.jpg?s=612x612&w=0&k=20&c=mX7B20WZIPTvEeW42SiYOHcYckeeiojMQ04rbF1d2gI='
  },
  {
    id: 'bs3',
    title: 'Brake Disc/Rotor Resurfacing',
    description: 'Smooth and resurface brake rotors to restore stopping power.',
    price: 2500.00,
    image: 'https://media.istockphoto.com/id/626146076/photo/disk-brake-machine-working-to-rebuild-serface.jpg?s=612x612&w=0&k=20&c=MyczrDlqwMyd020EOCoR6BcxRiuhx-KR6c7dDpZQpqk='
  },
  {
    id: 'bs4',
    title: 'Brake Caliper Servicing',
    description: 'Repair, lubricate or replace sticking brake calipers.',
    price: 2800.00,
    image: 'https://media.istockphoto.com/id/2165488002/photo/automotive-maintenanceclose-up-of-the-brake-mechanism-of-a-car.jpg?s=612x612&w=0&k=20&c=cCekn6kw5lHQOVtSabnrJYdU7wT7tOI4NffLJpYGpFo='
  },
  {
    id: 'bs5',
    title: 'Suspension System Inspection',
    description: 'Check for worn-out shocks, struts, bushings, and mounts.',
    price: 1000.00,
    image: 'https://media.istockphoto.com/id/2007558151/photo/closeup-cars-suspension-system-focusing-on-the-axle-and-cv-joint-area.jpg?s=612x612&w=0&k=20&c=xE37r3h2Gd8Ddp4DoxMqotNeWup3jNL36w-omBsFSr8='
  },
  {
    id: 'bs6',
    title: 'Shock Absorber Replacement',
    description: 'Restore ride comfort with new shocks or struts.',
    price: 5500.00,
    image: 'https://media.istockphoto.com/id/946261062/photo/bottom-view-of-wheel-and-shock-absorber-of-vehicle.jpg?s=612x612&w=0&k=20&c=w-1POmKRJGzBLYRRDmyUPUcW0-2fGRuIDuLmyHsEP8U='
  },
  {
    id: 'bs7',
    title: 'Steering Rack Repair',
    description: 'Fix issues in the power steering rack for smooth turning.',
    price: 6000.00,
    image: 'https://media.istockphoto.com/id/1198916270/photo/car-bottom-view-wishbone-power-steering-rack-arm-suspension-and-etc-system-of-saloon-or-sedan.jpg?s=612x612&w=0&k=20&c=PHGosX6U0K65CiGa8kHeU2Llfyi5X94fXC1BNrEDG2A='
  },
  {
    id: 'bs8',
    title: 'Brake Line Replacement',
    description: 'Replace rusty or damaged brake lines to prevent leaks.',
    price: 3200.00,
    image: 'https://media.istockphoto.com/id/2181635433/photo/drum-brake-shoes.jpg?s=612x612&w=0&k=20&c=5wgBoOeIrnvuLPJ3Nh41jKn0wMkFpgN2LyOm-e76EkI='
  },
  {
    id: 'bs9',
    title: 'Control Arm Replacement',
    description: 'Restore suspension geometry with new control arms and ball joints.',
    price: 4500.00,
    image: 'https://media.istockphoto.com/id/1390082936/photo/broken-car-ball-joint-on-pickup-track.jpg?s=612x612&w=0&k=20&c=SK9E-c_DrUGjRc08WKHAT79cMxehNQaX5cr8O27vpdU='
  },
  {
    id: 'bs10',
    title: 'Brake Light Inspection & Replacement',
    description: 'Ensure all brake lights function correctly for safety.',
    price: 500.00,
    image: 'https://images.pexels.com/photos/8986034/pexels-photo-8986034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'bs11',
    title: 'Suspension Bushing Replacement',
    description: 'Replace worn-out rubber bushings to reduce vibration and noise.',
    price: 3000.00,
    image: 'https://media.istockphoto.com/id/1409490917/photo/mechanic-repairs-the-running-gear-of-a-car-car-hands-of-a-mechanic-close-up-small-business.jpg?s=612x612&w=0&k=20&c=bp_uIoa6aP9DNHbZezeOOT-yLdKhQEixLSEa6oOXNU0='
  },
  {
    id: 'bs12',
    title: 'Wheel Alignment',
    description: 'Ensure proper tracking and handling with a full alignment.',
    price: 2000.00,
    image: 'https://media.istockphoto.com/id/2106472694/photo/brake-pad-and-tire-change-at-auto-repair-shop.jpg?s=612x612&w=0&k=20&c=G4-me_2NPW0Rpl7pS-HKlGv3YiRHhqd0EWwd3sXSMl4='
  },
  {
    id: 'bs13',
    title: 'Suspension Lift or Lowering Kits',
    description: 'Customize ride height with lift or lowering kit installations.',
    price: 7000.00,
    image: 'https://media.istockphoto.com/id/2007558151/photo/closeup-cars-suspension-system-focusing-on-the-axle-and-cv-joint-area.jpg?s=612x612&w=0&k=20&c=xE37r3h2Gd8Ddp4DoxMqotNeWup3jNL36w-omBsFSr8='
  },
  {
    id: 'bs14',
    title: 'ABS Diagnostics & Repair',
    description: 'Scan and fix issues in the Anti-lock Braking System (ABS).',
    price: 3500.00,
    image: 'https://media.istockphoto.com/id/2073383462/photo/car-dashboard-lights-engine-light.jpg?s=612x612&w=0&k=20&c=II4sn1cTDVhYQlS0zW6ZBNNxSM8oehhy0wfR-cJQNN4='
  }
];


const batteryServices = [
  {
    id: 'bt1',
    title: 'Battery Health Check',
    description: 'Comprehensive battery diagnostics to ensure optimal performance.',
    price: 500.00,
    image: 'https://media.istockphoto.com/id/2148440620/photo/automotive-battery-tester-diagnosis-defective-battery.jpg?s=612x612&w=0&k=20&c=CfZ_ZcUxqZ_uLL0IiHQW8efupWD9wEGGisqAQZf9TQQ='
  },
  {
    id: 'bt2',
    title: 'Battery Terminal Cleaning',
    description: 'Clean corroded terminals to improve battery connectivity.',
    price: 300.00,
    image: 'https://media.istockphoto.com/id/510384660/photo/washed-battery-with-foam-when-cleaning-the-car.jpg?s=612x612&w=0&k=20&c=afEPuA25jiMJpaNUrvS_xWqSXXrmX9-RE3MetGSu7MY='
  },
  {
    id: 'bt3',
    title: 'Jump Start Service',
    description: 'On-the-spot jump-start for dead batteries.',
    price: 800.00,
    image: 'https://media.istockphoto.com/id/2003519130/photo/it-seems-like-this-old-car-wont-start.jpg?s=612x612&w=0&k=20&c=8D4CKbL7XDmdowhF7fsUgNMj3-RdiaYcM6nx6F7bc-g='
  },
  {
    id: 'bt4',
    title: 'Battery Replacement (Standard)',
    description: 'Install a new standard battery with safe disposal of old one.',
    price: 4500.00,
    image: 'https://media.istockphoto.com/id/2181048283/photo/a-mechanic-replaces-a-car-battery-in-a-vehicles-engine-bay-during-routine-maintenance-at-a.jpg?s=612x612&w=0&k=20&c=Y53v-TK_4oXGlm43WuOEHgLMQGqdPW7-22qcLTwLahU='
  },
  {
    id: 'bt5',
    title: 'Battery Replacement (High-Performance)',
    description: 'Install high-capacity battery for performance vehicles.',
    price: 7000.00,
    image: 'https://media.istockphoto.com/id/2181048197/photo/a-mechanic-is-working-on-the-battery-of-a-car-in-a-garage.jpg?s=612x612&w=0&k=20&c=mhpLvArUrOv9S67TrLXyjlObk8ekckGWVhiKoW3Nyuk='
  },
  {
    id: 'bt6',
    title: 'Hybrid Vehicle Battery Check',
    description: 'Diagnostics and maintenance of hybrid car batteries.',
    price: 3000.00,
    image: 'https://media.istockphoto.com/id/2185359123/photo/inspection-hand-holding-battery-capacity-tester-ev-battery-voltmeter-car-inspector-service.jpg?s=612x612&w=0&k=20&c=UPoWfj42J36mQr5zUJOgxypr8_7AQu4CLVgJ4SOwdh0='
  },
  {
    id: 'bt7',
    title: 'Battery Load Testing',
    description: 'Test battery under load to detect weak or failing units.',
    price: 1000.00,
    image: 'https://media.istockphoto.com/id/2168393131/photo/technician-diagnosing-health-of-automobile-alternator-with-instrument-test-result-suggested.jpg?s=612x612&w=0&k=20&c=ArSJmJt3ePKH6zvLDv2mlpAeNlu6PfssebRxAqjDZqw='
  },
  {
    id: 'bt8',
    title: 'Battery Charging Service',
    description: 'Slow or fast charging options for low-voltage batteries.',
    price: 600.00,
    image: 'https://media.istockphoto.com/id/2148502928/photo/car-battery-is-charged-by-the-device.jpg?s=612x612&w=0&k=20&c=fLV4ebPqtYXSKchEzFKwR2kzN5PC6XnTaJhp_Aw-UeM='
  },
  {
    id: 'bt9',
    title: 'Remote Battery Monitoring Installation',
    description: 'Install sensors for real-time battery health alerts.',
    price: 2500.00,
    image: 'https://media.istockphoto.com/id/2175572315/photo/battery-capacity-tester-ev-battery-voltmeter-car-inspector-service-power-industrial-fuel.jpg?s=612x612&w=0&k=20&c=UG7vHhr1JAtqO0IqqXMvXW0gcjshIu4PlWxDUXhSLf0='
  },
  {
    id: 'bt10',
    title: 'Alternator Check',
    description: 'Ensure your alternator is charging the battery correctly.',
    price: 1500.00,
    image: 'https://media.istockphoto.com/id/1339901432/photo/car-starter-battery-voltage-measured-with-multimeter-voltage-is-around-13-volts-as-the.jpg?s=612x612&w=0&k=20&c=DiHXHmRa9Jqh_CyiBK4MExgVk7lBjafVZgBEOPxQh24='
  },
  {
    id: 'bt11',
    title: 'Parasitic Drain Test',
    description: 'Find hidden power drains that kill your battery overnight.',
    price: 1800.00,
    image: 'https://media.istockphoto.com/id/1384858577/photo/master-repairs-wires-in-modern-car-alarm-security-system.jpg?s=612x612&w=0&k=20&c=g2PvoVRrrkJNfRpvmxdMBtGrzWjladR99J80sFbikHM='
  },
  {
    id: 'bt12',
    title: 'Battery Mount Replacement',
    description: 'Replace loose or broken battery brackets/mounts.',
    price: 900.00,
    image: 'https://media.istockphoto.com/id/1671428879/photo/the-battery-installed-in-the-car-engine.jpg?s=612x612&w=0&k=20&c=AWCWxKqr6JRhVBi1oAywOHp-WckBI80iKBwUReI1RSg='
  },
  {
    id: 'bt13',
    title: 'Battery Cable Replacement',
    description: 'Install new battery cables for better power transfer.',
    price: 1300.00,
    image: 'https://media.istockphoto.com/id/1471623754/photo/photo-of-car-battery-positive-wire.jpg?s=612x612&w=0&k=20&c=h35qjhKQAoWTLWyPElIgrrcp336d7mlO_SVzI6_SWDM='
  },
  {
    id: 'bt14',
    title: 'Emergency Roadside Battery Swap',
    description: 'Mobile service for urgent battery replacements on the road.',
    price: 5200.00,
    image: 'https://media.istockphoto.com/id/1421037391/photo/roadside-assistance.jpg?s=612x612&w=0&k=20&c=yl_dHjZgfkhI_IHGT6M3-HS5daoTh0WJm-wafaWfVng='
  },
  {
    id: 'bt15',
    title: 'Recycled Battery Installation',
    description: 'Eco-friendly refurbished battery replacements at lower cost.',
    price: 3500.00,
    image: 'https://media.istockphoto.com/id/960780272/photo/a-car-battery.jpg?s=612x612&w=0&k=20&c=MJ6t4pYEU-n8bA95nQ234gF7O-ggQRgEMLqA-VzYaSg='
  },
  {
    id: 'bt16',
    title: 'Battery Disposal & Recycling',
    description: 'Safe and responsible disposal of used car batteries.',
    price: 400.00,
    image: 'https://media.istockphoto.com/id/1292288024/photo/a-pallet-with-used-car-batteries-awaiting-recycling.jpg?s=612x612&w=0&k=20&c=WX6rSFPWWGAp0p6Jg2eJrjN-okbZ_9gUn2RwNCKXHrQ='
  }
];


function ServiceDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Function to get the service items based on the service ID
  const getServiceItems = (serviceId) => {
    switch (serviceId) {
      case '1': return carRepairServices;
      case '2': return mechElectricalServices;
      case '3': return paintBodyServices;
      case '4': return diagnosticServices;
      case '5': return accidentRepairServices;
      case '6': return maintenanceServices;
      case '7': return tireServices;
      case '8': return vehicleDetailingAndTuningServices;
      case '9': return brakeAndSuspensionServices;
      case '10': return batteryServices;
      default: return [];
    }
  };

  const serviceItems = getServiceItems(id);

  // Function to handle adding an item to the cart with selected size, color, and rating
  const handleAddToCart = (item, selectedSize, selectedColor, rating) => {
    const itemWithDetails = {
      ...item,
      size: selectedSize,
      color: selectedColor,
      rating: rating,
    };
    addToCart(itemWithDetails);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Available Products</h1>
        <img
          src="https://i.postimg.cc/pLhvc3cR/saf.jpg"
          alt="Promotional Banner"
          className="w-full h-8 object-fit mb-8"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {serviceItems.map((item) => {
            const [selectedSize, setSelectedSize] = useState('');
            const [selectedColor, setSelectedColor] = useState('');
            const [rating, setRating] = useState(0);

            const ratingChanged = (newRating) => {
              setRating(newRating);
            };

            return (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs">
                <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute top-0 left-0 w-full h-full object-contain transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>

                  {/* Size Selection */}
                  <div className="mb-2">
                    <label htmlFor={`size-${item.id}`} className="block text-sm font-medium text-gray-700">
                      Size
                    </label>
                    <select
                      id={`size-${item.id}`}
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="">Select size</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>

                  {/* Color Selection */}
                  <div className="mb-2">
                    <label htmlFor={`color-${item.id}`} className="block text-sm font-medium text-gray-700">
                      Colour
                    </label>
                    <select
                      id={`color-${item.id}`}
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="">select colour</option>
                      <option value="Black">Black</option>
                      <option value="White">White</option>
                      <option value="White">purple</option>
                      <option value="Red">Red</option>
                      <option value="White">pink</option>
                      <option value="Blue">Blue</option>
                      <option value="White">yellow</option>
                      <option value="Green">Green</option>
                    </select>
                  </div>

                  {/* Rating Section */}
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Rate
                    </label>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ff0000"
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold text-lg">KSH {item.price}</span>
                    <button
                      onClick={() => handleAddToCart(item, selectedSize, selectedColor, rating)}
                      className="bg-blue-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                      disabled={!selectedSize || !selectedColor}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;