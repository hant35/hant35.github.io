const VEHICLES = 
[
  {
    "brand": "Acura",
    "model": "ILX",
    "years": "2016, 2017, 2018",
    "desc": "openpilot upgrades your Acura ILX with automated lane centering and adaptive cruise control while driving above 26 mph. This car may not be able to take tight turns on its own. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Technology Plus Package or AcuraWatch Plus.",
    "harness": "Honda Nidec"
  },
  {
    "brand": "Acura",
    "model": "ILX",
    "years": "2019",
    "desc": "openpilot upgrades your Acura ILX with automated lane centering and adaptive cruise control while driving above 26 mph. This car may not be able to take tight turns on its own. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Nidec"
  },
  {
    "brand": "Acura",
    "model": "MDX",
    "years": "2025, 2026",
    "desc": "openpilot upgrades your Acura MDX with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with All except Type S.",
    "harness": "Honda Bosch C"
  },
  {
    "brand": "Acura",
    "model": "RDX",
    "years": "2016, 2017, 2018",
    "desc": "openpilot upgrades your Acura RDX with automated lane centering and adaptive cruise control while driving above 26 mph. This car may not be able to take tight turns on its own. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with AcuraWatch Plus or Advance Package.",
    "harness": "Honda Nidec"
  },
  {
    "brand": "Acura",
    "model": "RDX",
    "years": "2019, 2020, 2021",
    "desc": "openpilot upgrades your Acura RDX with automated lane centering above 3 mph, and adaptive cruise control that automatically resumes from a stop. This car may not be able to take tight turns on its own.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch A"
  },
  {
    "brand": "Acura",
    "model": "TLX",
    "years": "2021",
    "desc": "openpilot upgrades your Acura TLX with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch A"
  },
  {
    "brand": "Acura",
    "model": "TLX",
    "years": "2025",
    "desc": "openpilot upgrades your Acura TLX with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch C"
  },
  {
    "brand": "Audi",
    "model": "A3",
    "years": "2014, 2015, 2016, 2017, 2018, 2019",
    "desc": "openpilot upgrades your Audi A3 with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Audi",
    "model": "A3 Sportback e-tron",
    "years": "2017, 2018",
    "desc": "openpilot upgrades your Audi A3 Sportback e-tron with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Audi",
    "model": "Q2",
    "years": "2018",
    "desc": "openpilot upgrades your Audi Q2 with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Audi",
    "model": "Q3",
    "years": "2019, 2020, 2021, 2022, 2023, 2024",
    "desc": "openpilot upgrades your Audi Q3 with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Audi",
    "model": "RS3",
    "years": "2018",
    "desc": "openpilot upgrades your Audi RS3 with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Audi",
    "model": "S3",
    "years": "2015, 2016, 2017",
    "desc": "openpilot upgrades your Audi S3 with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Chevrolet",
    "model": "Bolt EUV",
    "years": "2022, 2023",
    "desc": "openpilot upgrades your Chevrolet Bolt EUV with automated lane centering above 6 mph, and adaptive cruise control while driving above 3 mph.",
    "support": "openpilot requires the car to come equipped with Premier or Premier Redline Trim, without Super Cruise Package.",
    "harness": "GM"
  },
  {
    "brand": "Chevrolet",
    "model": "Bolt EV",
    "years": "2022, 2023",
    "desc": "openpilot upgrades your Chevrolet Bolt EV with automated lane centering above 6 mph, and adaptive cruise control while driving above 3 mph.",
    "support": "openpilot requires the car to come equipped with 2LT Trim with Adaptive Cruise Control Package.",
    "harness": "GM"
  },
  {
    "brand": "Chevrolet",
    "model": "Equinox",
    "years": "2019, 2020, 2021, 2022",
    "desc": "openpilot upgrades your Chevrolet Equinox with automated lane centering above 6 mph, and adaptive cruise control while driving above 3 mph.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC).",
    "harness": "GM"
  },
  {
    "brand": "Chevrolet",
    "model": "Silverado 1500",
    "years": "2020, 2021",
    "desc": "openpilot upgrades your Chevrolet Silverado 1500 with automated lane centering above 6 mph, and adaptive cruise control.",
    "support": "openpilot requires the car to come equipped with Safety Package II.",
    "harness": "GM"
  },
  {
    "brand": "Chevrolet",
    "model": "Trailblazer",
    "years": "2021, 2022",
    "desc": "openpilot upgrades your Chevrolet Trailblazer with automated lane centering above 6 mph, and adaptive cruise control while driving above 3 mph.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC).",
    "harness": "GM"
  },
  {
    "brand": "Chrysler",
    "model": "Pacifica",
    "years": "2017, 2018",
    "desc": "openpilot upgrades your Chrysler Pacifica with automated lane centering above 9 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC).",
    "harness": "FCA"
  },
  {
    "brand": "Chrysler",
    "model": "Pacifica",
    "years": "2019, 2020",
    "desc": "openpilot upgrades your Chrysler Pacifica with automated lane centering above 39 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC).",
    "harness": "FCA"
  },
  {
    "brand": "Chrysler",
    "model": "Pacifica",
    "years": "2021, 2022, 2023",
    "desc": "openpilot upgrades your Chrysler Pacifica with automated lane centering above 39 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "FCA"
  },
  {
    "brand": "Chrysler",
    "model": "Pacifica Hybrid",
    "years": "2017, 2018",
    "desc": "openpilot upgrades your Chrysler Pacifica Hybrid with automated lane centering above 9 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC).",
    "harness": "FCA"
  },
  {
    "brand": "Chrysler",
    "model": "Pacifica Hybrid",
    "years": "2019, 2020, 2021, 2022, 2023, 2024, 2025",
    "desc": "openpilot upgrades your Chrysler Pacifica Hybrid with automated lane centering above 39 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC).",
    "harness": "FCA"
  },
  {
    "brand": "CUPRA",
    "model": "Ateca",
    "years": "2018, 2019, 2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your CUPRA Ateca with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Dodge",
    "model": "Durango",
    "years": "2020, 2021",
    "desc": "openpilot upgrades your Dodge Durango with automated lane centering above 39 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC).",
    "harness": "FCA"
  },
  {
    "brand": "Ford",
    "model": "Bronco Sport",
    "years": "2021, 2022, 2023, 2024",
    "desc": "openpilot upgrades your Ford Bronco Sport with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Co-Pilot360 Assist+.",
    "harness": "Ford Q3"
  },
  {
    "brand": "Ford",
    "model": "Escape",
    "years": "2020, 2021, 2022",
    "desc": "openpilot upgrades your Ford Escape with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Co-Pilot360 Assist+.",
    "harness": "Ford Q3"
  },
  {
    "brand": "Ford",
    "model": "Escape",
    "years": "2023, 2024",
    "desc": "openpilot upgrades your Ford Escape with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Co-Pilot360 Assist+.",
    "harness": "Ford Q4"
  },
  {
    "brand": "Ford",
    "model": "Escape Hybrid",
    "years": "2020, 2021, 2022",
    "desc": "openpilot upgrades your Ford Escape Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Co-Pilot360 Assist+.",
    "harness": "Ford Q3"
  },
  {
    "brand": "Ford",
    "model": "Escape Hybrid",
    "years": "2023, 2024",
    "desc": "openpilot upgrades your Ford Escape Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Co-Pilot360 Assist+.",
    "harness": "Ford Q4"
  },
  {
    "brand": "Ford",
    "model": "Escape Plug-in Hybrid",
    "years": "2020, 2021, 2022",
    "desc": "openpilot upgrades your Ford Escape Plug-in Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Co-Pilot360 Assist+.",
    "harness": "Ford Q3"
  },
  {
    "brand": "Ford",
    "model": "Escape Plug-in Hybrid",
    "years": "2023, 2024",
    "desc": "openpilot upgrades your Ford Escape Plug-in Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Co-Pilot360 Assist+.",
    "harness": "Ford Q4"
  },
  {
    "brand": "Ford",
    "model": "Expedition",
    "years": "2022, 2023, 2024",
    "desc": "openpilot upgrades your Ford Expedition with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Co-Pilot360 Assist 2.0.",
    "harness": "Ford Q4"
  },
  {
    "brand": "Ford",
    "model": "Explorer",
    "years": "2020, 2021, 2022, 2023, 2024",
    "desc": "openpilot upgrades your Ford Explorer with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Co-Pilot360 Assist+.",
    "harness": "Ford Q3"
  },
  {
    "brand": "Ford",
    "model": "Explorer Hybrid",
    "years": "2020, 2021, 2022, 2023, 2024",
    "desc": "openpilot upgrades your Ford Explorer Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Co-Pilot360 Assist+.",
    "harness": "Ford Q3"
  },
  {
    "brand": "Ford",
    "model": "F-150",
    "years": "2021, 2022, 2023",
    "desc": "openpilot upgrades your Ford F-150 with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Co-Pilot360 Assist 2.0.",
    "harness": "Ford Q4"
  },
  {
    "brand": "Ford",
    "model": "F-150 Hybrid",
    "years": "2021, 2022, 2023",
    "desc": "openpilot upgrades your Ford F-150 Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Co-Pilot360 Assist 2.0.",
    "harness": "Ford Q4"
  },
  {
    "brand": "Ford",
    "model": "Focus",
    "years": "2018",
    "desc": "openpilot upgrades your Ford Focus with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control with Lane Centering.",
    "harness": "Ford Q3"
  },
  {
    "brand": "Ford",
    "model": "Focus Hybrid",
    "years": "2018",
    "desc": "openpilot upgrades your Ford Focus Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control with Lane Centering.",
    "harness": "Ford Q3"
  },
  {
    "brand": "Ford",
    "model": "Kuga",
    "years": "2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Ford Kuga with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control with Lane Centering.",
    "harness": "Ford Q3"
  },
  {
    "brand": "Ford",
    "model": "Kuga Hybrid",
    "years": "2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Ford Kuga Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control with Lane Centering.",
    "harness": "Ford Q3"
  },
  {
    "brand": "Ford",
    "model": "Kuga Hybrid",
    "years": "2024",
    "desc": "openpilot upgrades your Ford Kuga Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Ford Q4"
  },
  {
    "brand": "Ford",
    "model": "Kuga Plug-in Hybrid",
    "years": "2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Ford Kuga Plug-in Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control with Lane Centering.",
    "harness": "Ford Q3"
  },
  {
    "brand": "Ford",
    "model": "Kuga Plug-in Hybrid",
    "years": "2024",
    "desc": "openpilot upgrades your Ford Kuga Plug-in Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Ford Q4"
  },
  {
    "brand": "Ford",
    "model": "Maverick",
    "years": "2022",
    "desc": "openpilot upgrades your Ford Maverick with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with LARIAT Luxury.",
    "harness": "Ford Q3"
  },
  {
    "brand": "Ford",
    "model": "Maverick",
    "years": "2023, 2024",
    "desc": "openpilot upgrades your Ford Maverick with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Co-Pilot360 Assist.",
    "harness": "Ford Q3"
  },
  {
    "brand": "Ford",
    "model": "Maverick Hybrid",
    "years": "2022",
    "desc": "openpilot upgrades your Ford Maverick Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with LARIAT Luxury.",
    "harness": "Ford Q3"
  },
  {
    "brand": "Ford",
    "model": "Maverick Hybrid",
    "years": "2023, 2024",
    "desc": "openpilot upgrades your Ford Maverick Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Co-Pilot360 Assist.",
    "harness": "Ford Q3"
  },
  {
    "brand": "Ford",
    "model": "Mustang Mach-E",
    "years": "2021, 2022, 2023, 2024",
    "desc": "openpilot upgrades your Ford Mustang Mach-E with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Ford Q4"
  },
  {
    "brand": "Ford",
    "model": "Ranger",
    "years": "2024",
    "desc": "openpilot upgrades your Ford Ranger with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control with Lane Centering.",
    "harness": "Ford Q4"
  },
  {
    "brand": "Genesis",
    "model": "G70",
    "years": "2018",
    "desc": "openpilot upgrades your Genesis G70 with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai F"
  },
  {
    "brand": "Genesis",
    "model": "G70",
    "years": "2019, 2020, 2021",
    "desc": "openpilot upgrades your Genesis G70 with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai F"
  },
  {
    "brand": "Genesis",
    "model": "G70",
    "years": "2022, 2023",
    "desc": "openpilot upgrades your Genesis G70 with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai L"
  },
  {
    "brand": "Genesis",
    "model": "G80",
    "years": "2017",
    "desc": "openpilot upgrades your Genesis G80 with automated lane centering above 37 mph, and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai J"
  },
  {
    "brand": "Genesis",
    "model": "G80",
    "years": "2018, 2019",
    "desc": "openpilot upgrades your Genesis G80 with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai H"
  },
  {
    "brand": "Genesis",
    "model": "G80 (2.5T Advanced Trim, with HDA II)",
    "years": "2024",
    "desc": "openpilot upgrades your Genesis G80 (2.5T Advanced Trim, with HDA II) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Highway Driving Assist II.",
    "harness": "Hyundai P"
  },
  {
    "brand": "Genesis",
    "model": "G90",
    "years": "2017, 2018, 2019, 2020",
    "desc": "openpilot upgrades your Genesis G90 with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai C"
  },
  {
    "brand": "Genesis",
    "model": "GV60 (Advanced Trim)",
    "years": "2023",
    "desc": "openpilot upgrades your Genesis GV60 (Advanced Trim) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai A"
  },
  {
    "brand": "Genesis",
    "model": "GV60 (Performance Trim)",
    "years": "2022, 2023",
    "desc": "openpilot upgrades your Genesis GV60 (Performance Trim) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai K"
  },
  {
    "brand": "Genesis",
    "model": "GV70 (2.5T Trim, without HDA II)",
    "years": "2022, 2023, 2024",
    "desc": "openpilot upgrades your Genesis GV70 (2.5T Trim, without HDA II) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai L"
  },
  {
    "brand": "Genesis",
    "model": "GV70 (3.5T Trim, without HDA II)",
    "years": "2022, 2023",
    "desc": "openpilot upgrades your Genesis GV70 (3.5T Trim, without HDA II) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai M"
  },
  {
    "brand": "Genesis",
    "model": "GV70 Electrified (Australia Only)",
    "years": "2022",
    "desc": "openpilot upgrades your Genesis GV70 Electrified (Australia Only) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai Q"
  },
  {
    "brand": "Genesis",
    "model": "GV70 Electrified (with HDA II)",
    "years": "2023, 2024",
    "desc": "openpilot upgrades your Genesis GV70 Electrified (with HDA II) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Highway Driving Assist II.",
    "harness": "Hyundai Q"
  },
  {
    "brand": "Genesis",
    "model": "GV80",
    "years": "2023",
    "desc": "openpilot upgrades your Genesis GV80 with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai M"
  },
  {
    "brand": "GMC",
    "model": "Sierra 1500",
    "years": "2020, 2021",
    "desc": "openpilot upgrades your GMC Sierra 1500 with automated lane centering above 6 mph, and adaptive cruise control.",
    "support": "openpilot requires the car to come equipped with Driver Alert Package II.",
    "harness": "GM"
  },
  {
    "brand": "Honda",
    "model": "Accord",
    "years": "2018, 2019, 2020, 2021, 2022",
    "desc": "openpilot upgrades your Honda Accord with automated lane centering above 3 mph, and adaptive cruise control that automatically resumes from a stop. This car may not be able to take tight turns on its own.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch A"
  },
  {
    "brand": "Honda",
    "model": "Accord",
    "years": "2023, 2024, 2025",
    "desc": "openpilot upgrades your Honda Accord with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch C"
  },
  {
    "brand": "Honda",
    "model": "Accord Hybrid",
    "years": "2018, 2019, 2020, 2021, 2022",
    "desc": "openpilot upgrades your Honda Accord Hybrid with automated lane centering above 3 mph, and adaptive cruise control that automatically resumes from a stop. This car may not be able to take tight turns on its own.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch A"
  },
  {
    "brand": "Honda",
    "model": "Accord Hybrid",
    "years": "2023, 2024, 2025",
    "desc": "openpilot upgrades your Honda Accord Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch C"
  },
  {
    "brand": "Honda",
    "model": "City (Brazil only)",
    "years": "2023",
    "desc": "openpilot upgrades your Honda City (Brazil only) with automated lane centering above 14 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch B"
  },
  {
    "brand": "Honda",
    "model": "Civic",
    "years": "2016, 2017, 2018",
    "desc": "openpilot upgrades your Honda Civic with automated lane centering above 12 mph, and adaptive cruise control that automatically resumes from a stop. This car may not be able to take tight turns on its own. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Honda Sensing.",
    "harness": "Honda Nidec"
  },
  {
    "brand": "Honda",
    "model": "Civic",
    "years": "2019, 2020, 2021",
    "desc": "openpilot upgrades your Honda Civic with automated lane centering above 2 mph, and adaptive cruise control that automatically resumes from a stop. This car may not be able to take tight turns on its own.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch A"
  },
  {
    "brand": "Honda",
    "model": "Civic",
    "years": "2022, 2023, 2024",
    "desc": "openpilot upgrades your Honda Civic with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch B"
  },
  {
    "brand": "Honda",
    "model": "Civic Hatchback",
    "years": "2017, 2018",
    "desc": "openpilot upgrades your Honda Civic Hatchback with automated lane centering above 12 mph, and adaptive cruise control that automatically resumes from a stop. This car may not be able to take tight turns on its own.",
    "support": "openpilot requires the car to come equipped with Honda Sensing.",
    "harness": "Honda Bosch A"
  },
  {
    "brand": "Honda",
    "model": "Civic Hatchback",
    "years": "2019, 2020, 2021",
    "desc": "openpilot upgrades your Honda Civic Hatchback with automated lane centering above 12 mph, and adaptive cruise control that automatically resumes from a stop. This car may not be able to take tight turns on its own.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch A"
  },
  {
    "brand": "Honda",
    "model": "Civic Hatchback",
    "years": "2022, 2023, 2024",
    "desc": "openpilot upgrades your Honda Civic Hatchback with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch B"
  },
  {
    "brand": "Honda",
    "model": "Civic Hatchback Hybrid",
    "years": "2025, 2026",
    "desc": "openpilot upgrades your Honda Civic Hatchback Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch B"
  },
  {
    "brand": "Honda",
    "model": "Civic Hatchback Hybrid (Europe only)",
    "years": "2023",
    "desc": "openpilot upgrades your Honda Civic Hatchback Hybrid (Europe only) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch B"
  },
  {
    "brand": "Honda",
    "model": "Civic Hybrid",
    "years": "2025, 2026",
    "desc": "openpilot upgrades your Honda Civic Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch B"
  },
  {
    "brand": "Honda",
    "model": "CR-V",
    "years": "2015, 2016",
    "desc": "openpilot upgrades your Honda CR-V with automated lane centering and adaptive cruise control while driving above 26 mph. This car may not be able to take tight turns on its own. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Touring Trim.",
    "harness": "Honda Nidec"
  },
  {
    "brand": "Honda",
    "model": "CR-V",
    "years": "2017, 2018, 2019, 2020, 2021, 2022",
    "desc": "openpilot upgrades your Honda CR-V with automated lane centering above 15 mph, and adaptive cruise control that automatically resumes from a stop. This car may not be able to take tight turns on its own.",
    "support": "openpilot requires the car to come equipped with Honda Sensing.",
    "harness": "Honda Bosch A"
  },
  {
    "brand": "Honda",
    "model": "CR-V",
    "years": "2023, 2024, 2025, 2026",
    "desc": "openpilot upgrades your Honda CR-V with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch C"
  },
  {
    "brand": "Honda",
    "model": "CR-V Hybrid",
    "years": "2017, 2018, 2019, 2020, 2021, 2022",
    "desc": "openpilot upgrades your Honda CR-V Hybrid with automated lane centering above 12 mph, and adaptive cruise control that automatically resumes from a stop. This car may not be able to take tight turns on its own.",
    "support": "openpilot requires the car to come equipped with Honda Sensing.",
    "harness": "Honda Bosch A"
  },
  {
    "brand": "Honda",
    "model": "CR-V Hybrid",
    "years": "2023, 2024, 2025, 2026",
    "desc": "openpilot upgrades your Honda CR-V Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch C"
  },
  {
    "brand": "Honda",
    "model": "e",
    "years": "2020",
    "desc": "openpilot upgrades your Honda e with automated lane centering above 3 mph, and adaptive cruise control that automatically resumes from a stop. This car may not be able to take tight turns on its own.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch A"
  },
  {
    "brand": "Honda",
    "model": "Fit",
    "years": "2018, 2019, 2020",
    "desc": "openpilot upgrades your Honda Fit with automated lane centering and adaptive cruise control while driving above 26 mph. This car may not be able to take tight turns on its own. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Honda Sensing.",
    "harness": "Honda Nidec"
  },
  {
    "brand": "Honda",
    "model": "Freed",
    "years": "2020",
    "desc": "openpilot upgrades your Honda Freed with automated lane centering and adaptive cruise control while driving above 26 mph. This car may not be able to take tight turns on its own. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Honda Sensing.",
    "harness": "Honda Nidec"
  },
  {
    "brand": "Honda",
    "model": "HR-V",
    "years": "2019, 2020, 2021, 2022",
    "desc": "openpilot upgrades your Honda HR-V with automated lane centering and adaptive cruise control while driving above 26 mph. This car may not be able to take tight turns on its own. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Honda Sensing.",
    "harness": "Honda Nidec"
  },
  {
    "brand": "Honda",
    "model": "HR-V",
    "years": "2023, 2024, 2025",
    "desc": "openpilot upgrades your Honda HR-V with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch B"
  },
  {
    "brand": "Honda",
    "model": "Insight",
    "years": "2019, 2020, 2021, 2022",
    "desc": "openpilot upgrades your Honda Insight with automated lane centering above 3 mph, and adaptive cruise control that automatically resumes from a stop. This car may not be able to take tight turns on its own.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch A"
  },
  {
    "brand": "Honda",
    "model": "Inspire",
    "years": "2018",
    "desc": "openpilot upgrades your Honda Inspire with automated lane centering above 3 mph, and adaptive cruise control that automatically resumes from a stop. This car may not be able to take tight turns on its own.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch A"
  },
  {
    "brand": "Honda",
    "model": "N-Box",
    "years": "2018",
    "desc": "openpilot upgrades your Honda N-Box with automated lane centering above 11 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch A"
  },
  {
    "brand": "Honda",
    "model": "Odyssey",
    "years": "2018, 2019, 2020",
    "desc": "openpilot upgrades your Honda Odyssey with automated lane centering and adaptive cruise control while driving above 26 mph. This car may not be able to take tight turns on its own. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Honda Sensing.",
    "harness": "Honda Nidec"
  },
  {
    "brand": "Honda",
    "model": "Odyssey",
    "years": "2021, 2022, 2023, 2024, 2025, 2026",
    "desc": "openpilot upgrades your Honda Odyssey with automated lane centering above 43 mph, and adaptive cruise control that automatically resumes from a stop. This car may not be able to take tight turns on its own.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch A"
  },
  {
    "brand": "Honda",
    "model": "Odyssey (Taiwan)",
    "years": "2018, 2019",
    "desc": "openpilot upgrades your Honda Odyssey (Taiwan) with automated lane centering and adaptive cruise control while driving above 19 mph. This car may not be able to take tight turns on its own. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Honda Sensing.",
    "harness": "Honda Nidec"
  },
  {
    "brand": "Honda",
    "model": "Passport",
    "years": "2019, 2020, 2021, 2022, 2023, 2024, 2025",
    "desc": "openpilot upgrades your Honda Passport with automated lane centering and adaptive cruise control while driving above 26 mph. This car may not be able to take tight turns on its own. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Nidec"
  },
  {
    "brand": "Honda",
    "model": "Passport",
    "years": "2026",
    "desc": "openpilot upgrades your Honda Passport with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch C"
  },
  {
    "brand": "Honda",
    "model": "Pilot",
    "years": "2016, 2017, 2018, 2019, 2020, 2021, 2022",
    "desc": "openpilot upgrades your Honda Pilot with automated lane centering and adaptive cruise control while driving above 26 mph. This car may not be able to take tight turns on its own. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Honda Sensing.",
    "harness": "Honda Nidec"
  },
  {
    "brand": "Honda",
    "model": "Pilot",
    "years": "2023, 2024, 2025",
    "desc": "openpilot upgrades your Honda Pilot with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Honda Bosch C"
  },
  {
    "brand": "Honda",
    "model": "Ridgeline",
    "years": "2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025",
    "desc": "openpilot upgrades your Honda Ridgeline with automated lane centering and adaptive cruise control while driving above 26 mph. This car may not be able to take tight turns on its own. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Honda Sensing.",
    "harness": "Honda Nidec"
  },
  {
    "brand": "Hyundai",
    "model": "Azera",
    "years": "2022",
    "desc": "openpilot upgrades your Hyundai Azera with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai K"
  },
  {
    "brand": "Hyundai",
    "model": "Azera Hybrid",
    "years": "2019",
    "desc": "openpilot upgrades your Hyundai Azera Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai C"
  },
  {
    "brand": "Hyundai",
    "model": "Azera Hybrid",
    "years": "2020",
    "desc": "openpilot upgrades your Hyundai Azera Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai K"
  },
  {
    "brand": "Hyundai",
    "model": "Custin",
    "years": "2023",
    "desc": "openpilot upgrades your Hyundai Custin with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai K"
  },
  {
    "brand": "Hyundai",
    "model": "Elantra",
    "years": "2017, 2018",
    "desc": "openpilot upgrades your Hyundai Elantra with automated lane centering above 32 mph, and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai B"
  },
  {
    "brand": "Hyundai",
    "model": "Elantra",
    "years": "2019",
    "desc": "openpilot upgrades your Hyundai Elantra with automated lane centering above 32 mph, and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai G"
  },
  {
    "brand": "Hyundai",
    "model": "Elantra",
    "years": "2021, 2022, 2023",
    "desc": "openpilot upgrades your Hyundai Elantra with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai K"
  },
  {
    "brand": "Hyundai",
    "model": "Elantra GT",
    "years": "2017, 2018, 2019, 2020",
    "desc": "openpilot upgrades your Hyundai Elantra GT with automated lane centering above 32 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai E"
  },
  {
    "brand": "Hyundai",
    "model": "Elantra Hybrid",
    "years": "2021, 2022, 2023",
    "desc": "openpilot upgrades your Hyundai Elantra Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai K"
  },
  {
    "brand": "Hyundai",
    "model": "Genesis",
    "years": "2015, 2016",
    "desc": "openpilot upgrades your Hyundai Genesis with automated lane centering above 37 mph, and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai J"
  },
  {
    "brand": "Hyundai",
    "model": "i30",
    "years": "2017, 2018, 2019",
    "desc": "openpilot upgrades your Hyundai i30 with automated lane centering above 32 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai E"
  },
  {
    "brand": "Hyundai",
    "model": "Ioniq 5 (Southeast Asia and Europe only)",
    "years": "2022, 2023, 2024",
    "desc": "openpilot upgrades your Hyundai Ioniq 5 (Southeast Asia and Europe only) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai Q"
  },
  {
    "brand": "Hyundai",
    "model": "Ioniq 5 (with HDA II)",
    "years": "2022, 2023, 2024",
    "desc": "openpilot upgrades your Hyundai Ioniq 5 (with HDA II) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Highway Driving Assist II.",
    "harness": "Hyundai Q"
  },
  {
    "brand": "Hyundai",
    "model": "Ioniq 5 (without HDA II)",
    "years": "2022, 2023, 2024",
    "desc": "openpilot upgrades your Hyundai Ioniq 5 (without HDA II) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Highway Driving Assist.",
    "harness": "Hyundai K"
  },
  {
    "brand": "Hyundai",
    "model": "Ioniq 6 (with HDA II)",
    "years": "2023, 2024",
    "desc": "openpilot upgrades your Hyundai Ioniq 6 (with HDA II) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Highway Driving Assist II.",
    "harness": "Hyundai P"
  },
  {
    "brand": "Hyundai",
    "model": "Ioniq Electric",
    "years": "2019",
    "desc": "openpilot upgrades your Hyundai Ioniq Electric with automated lane centering above 32 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai C"
  },
  {
    "brand": "Hyundai",
    "model": "Ioniq Electric",
    "years": "2020",
    "desc": "openpilot upgrades your Hyundai Ioniq Electric with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai H"
  },
  {
    "brand": "Hyundai",
    "model": "Ioniq Hybrid",
    "years": "2017, 2018, 2019",
    "desc": "openpilot upgrades your Hyundai Ioniq Hybrid with automated lane centering above 32 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai C"
  },
  {
    "brand": "Hyundai",
    "model": "Ioniq Hybrid",
    "years": "2020, 2021, 2022",
    "desc": "openpilot upgrades your Hyundai Ioniq Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai H"
  },
  {
    "brand": "Hyundai",
    "model": "Ioniq Plug-in Hybrid",
    "years": "2019",
    "desc": "openpilot upgrades your Hyundai Ioniq Plug-in Hybrid with automated lane centering above 32 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai C"
  },
  {
    "brand": "Hyundai",
    "model": "Ioniq Plug-in Hybrid",
    "years": "2020, 2021, 2022",
    "desc": "openpilot upgrades your Hyundai Ioniq Plug-in Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai H"
  },
  {
    "brand": "Hyundai",
    "model": "Kona",
    "years": "2020",
    "desc": "openpilot upgrades your Hyundai Kona with automated lane centering and adaptive cruise control while driving above 6 mph.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai B"
  },
  {
    "brand": "Hyundai",
    "model": "Kona Electric",
    "years": "2018, 2019, 2020, 2021",
    "desc": "openpilot upgrades your Hyundai Kona Electric with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai G"
  },
  {
    "brand": "Hyundai",
    "model": "Kona Electric",
    "years": "2022, 2023",
    "desc": "openpilot upgrades your Hyundai Kona Electric with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai O"
  },
  {
    "brand": "Hyundai",
    "model": "Kona Electric (with HDA II, Korea only)",
    "years": "2023",
    "desc": "openpilot upgrades your Hyundai Kona Electric (with HDA II, Korea only) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai R"
  },
  {
    "brand": "Hyundai",
    "model": "Kona Hybrid",
    "years": "2020",
    "desc": "openpilot upgrades your Hyundai Kona Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai I"
  },
  {
    "brand": "Hyundai",
    "model": "Nexo",
    "years": "2021",
    "desc": "openpilot upgrades your Hyundai Nexo with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai H"
  },
  {
    "brand": "Hyundai",
    "model": "Palisade",
    "years": "2020, 2021, 2022",
    "desc": "openpilot upgrades your Hyundai Palisade with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai H"
  },
  {
    "brand": "Hyundai",
    "model": "Santa Cruz",
    "years": "2022, 2023, 2024",
    "desc": "openpilot upgrades your Hyundai Santa Cruz with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai N"
  },
  {
    "brand": "Hyundai",
    "model": "Santa Fe",
    "years": "2019, 2020",
    "desc": "openpilot upgrades your Hyundai Santa Fe with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai D"
  },
  {
    "brand": "Hyundai",
    "model": "Santa Fe",
    "years": "2021, 2022, 2023",
    "desc": "openpilot upgrades your Hyundai Santa Fe with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai L"
  },
  {
    "brand": "Hyundai",
    "model": "Santa Fe Hybrid",
    "years": "2022, 2023",
    "desc": "openpilot upgrades your Hyundai Santa Fe Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai L"
  },
  {
    "brand": "Hyundai",
    "model": "Santa Fe Plug-in Hybrid",
    "years": "2022, 2023",
    "desc": "openpilot upgrades your Hyundai Santa Fe Plug-in Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai L"
  },
  {
    "brand": "Hyundai",
    "model": "Sonata",
    "years": "2018, 2019",
    "desc": "openpilot upgrades your Hyundai Sonata with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai E"
  },
  {
    "brand": "Hyundai",
    "model": "Sonata",
    "years": "2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Hyundai Sonata with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai A"
  },
  {
    "brand": "Hyundai",
    "model": "Sonata Hybrid",
    "years": "2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Hyundai Sonata Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai A"
  },
  {
    "brand": "Hyundai",
    "model": "Staria",
    "years": "2023",
    "desc": "openpilot upgrades your Hyundai Staria with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai K"
  },
  {
    "brand": "Hyundai",
    "model": "Tucson",
    "years": "2021",
    "desc": "openpilot upgrades your Hyundai Tucson with automated lane centering and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai L"
  },
  {
    "brand": "Hyundai",
    "model": "Tucson",
    "years": "2022",
    "desc": "openpilot upgrades your Hyundai Tucson with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai N"
  },
  {
    "brand": "Hyundai",
    "model": "Tucson",
    "years": "2023, 2024",
    "desc": "openpilot upgrades your Hyundai Tucson with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai N"
  },
  {
    "brand": "Hyundai",
    "model": "Tucson Diesel",
    "years": "2019",
    "desc": "openpilot upgrades your Hyundai Tucson Diesel with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai L"
  },
  {
    "brand": "Hyundai",
    "model": "Tucson Hybrid",
    "years": "2022, 2023, 2024",
    "desc": "openpilot upgrades your Hyundai Tucson Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai N"
  },
  {
    "brand": "Hyundai",
    "model": "Tucson Plug-in Hybrid",
    "years": "2024",
    "desc": "openpilot upgrades your Hyundai Tucson Plug-in Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai N"
  },
  {
    "brand": "Hyundai",
    "model": "Veloster",
    "years": "2019, 2020",
    "desc": "openpilot upgrades your Hyundai Veloster with automated lane centering and adaptive cruise control while driving above 5 mph.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai E"
  },
  {
    "brand": "Jeep",
    "model": "Grand Cherokee",
    "years": "2016, 2017, 2018",
    "desc": "openpilot upgrades your Jeep Grand Cherokee with automated lane centering above 9 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC).",
    "harness": "FCA"
  },
  {
    "brand": "Jeep",
    "model": "Grand Cherokee",
    "years": "2019, 2020, 2021",
    "desc": "openpilot upgrades your Jeep Grand Cherokee with automated lane centering above 39 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC).",
    "harness": "FCA"
  },
  {
    "brand": "Kia",
    "model": "Carnival",
    "years": "2022, 2023, 2024",
    "desc": "openpilot upgrades your Kia Carnival with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai A"
  },
  {
    "brand": "Kia",
    "model": "Carnival (China only)",
    "years": "2023",
    "desc": "openpilot upgrades your Kia Carnival (China only) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai K"
  },
  {
    "brand": "Kia",
    "model": "Ceed",
    "years": "2019, 2020, 2021",
    "desc": "openpilot upgrades your Kia Ceed with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai E"
  },
  {
    "brand": "Kia",
    "model": "EV6 (Southeast Asia only)",
    "years": "2022, 2023, 2024",
    "desc": "openpilot upgrades your Kia EV6 (Southeast Asia only) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai P"
  },
  {
    "brand": "Kia",
    "model": "EV6 (with HDA II)",
    "years": "2022, 2023, 2024",
    "desc": "openpilot upgrades your Kia EV6 (with HDA II) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Highway Driving Assist II.",
    "harness": "Hyundai P"
  },
  {
    "brand": "Kia",
    "model": "EV6 (without HDA II)",
    "years": "2022, 2023, 2024",
    "desc": "openpilot upgrades your Kia EV6 (without HDA II) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Highway Driving Assist.",
    "harness": "Hyundai L"
  },
  {
    "brand": "Kia",
    "model": "Forte",
    "years": "2019, 2020, 2021",
    "desc": "openpilot upgrades your Kia Forte with automated lane centering and adaptive cruise control while driving above 6 mph.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai G"
  },
  {
    "brand": "Kia",
    "model": "Forte",
    "years": "2022, 2023",
    "desc": "openpilot upgrades your Kia Forte with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai E"
  },
  {
    "brand": "Kia",
    "model": "K5",
    "years": "2021, 2022, 2023, 2024",
    "desc": "openpilot upgrades your Kia K5 with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai A"
  },
  {
    "brand": "Kia",
    "model": "K5 Hybrid",
    "years": "2020, 2021, 2022",
    "desc": "openpilot upgrades your Kia K5 Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai A"
  },
  {
    "brand": "Kia",
    "model": "K7",
    "years": "2017",
    "desc": "openpilot upgrades your Kia K7 with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai C"
  },
  {
    "brand": "Kia",
    "model": "K8 Hybrid (with HDA II)",
    "years": "2023",
    "desc": "openpilot upgrades your Kia K8 Hybrid (with HDA II) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Highway Driving Assist II.",
    "harness": "Hyundai Q"
  },
  {
    "brand": "Kia",
    "model": "Niro EV",
    "years": "2019",
    "desc": "openpilot upgrades your Kia Niro EV with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai H"
  },
  {
    "brand": "Kia",
    "model": "Niro EV",
    "years": "2020",
    "desc": "openpilot upgrades your Kia Niro EV with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai F"
  },
  {
    "brand": "Kia",
    "model": "Niro EV",
    "years": "2021",
    "desc": "openpilot upgrades your Kia Niro EV with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai C"
  },
  {
    "brand": "Kia",
    "model": "Niro EV",
    "years": "2022",
    "desc": "openpilot upgrades your Kia Niro EV with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai H"
  },
  {
    "brand": "Kia",
    "model": "Niro EV (with HDA II)",
    "years": "2025",
    "desc": "openpilot upgrades your Kia Niro EV (with HDA II) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Highway Driving Assist II.",
    "harness": "Hyundai R"
  },
  {
    "brand": "Kia",
    "model": "Niro EV (without HDA II)",
    "years": "2023, 2024, 2025",
    "desc": "openpilot upgrades your Kia Niro EV (without HDA II) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai A"
  },
  {
    "brand": "Kia",
    "model": "Niro Hybrid",
    "years": "2018",
    "desc": "openpilot upgrades your Kia Niro Hybrid with automated lane centering above 32 mph, and adaptive cruise control while driving above 10 mph.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai C"
  },
  {
    "brand": "Kia",
    "model": "Niro Hybrid",
    "years": "2021",
    "desc": "openpilot upgrades your Kia Niro Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai D"
  },
  {
    "brand": "Kia",
    "model": "Niro Hybrid",
    "years": "2022",
    "desc": "openpilot upgrades your Kia Niro Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai F"
  },
  {
    "brand": "Kia",
    "model": "Niro Hybrid",
    "years": "2023",
    "desc": "openpilot upgrades your Kia Niro Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai A"
  },
  {
    "brand": "Kia",
    "model": "Niro Plug-in Hybrid",
    "years": "2018, 2019",
    "desc": "openpilot upgrades your Kia Niro Plug-in Hybrid with automated lane centering above 32 mph, and adaptive cruise control while driving above 10 mph.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai C"
  },
  {
    "brand": "Kia",
    "model": "Niro Plug-in Hybrid",
    "years": "2020",
    "desc": "openpilot upgrades your Kia Niro Plug-in Hybrid with automated lane centering above 32 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai D"
  },
  {
    "brand": "Kia",
    "model": "Niro Plug-in Hybrid",
    "years": "2021",
    "desc": "openpilot upgrades your Kia Niro Plug-in Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai D"
  },
  {
    "brand": "Kia",
    "model": "Niro Plug-in Hybrid",
    "years": "2022",
    "desc": "openpilot upgrades your Kia Niro Plug-in Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai F"
  },
  {
    "brand": "Kia",
    "model": "Optima",
    "years": "2017",
    "desc": "openpilot upgrades your Kia Optima with automated lane centering above 32 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Advanced Smart Cruise Control.",
    "harness": "Hyundai B"
  },
  {
    "brand": "Kia",
    "model": "Optima",
    "years": "2019, 2020",
    "desc": "openpilot upgrades your Kia Optima with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai G"
  },
  {
    "brand": "Kia",
    "model": "Optima Hybrid",
    "years": "2019",
    "desc": "openpilot upgrades your Kia Optima Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai H"
  },
  {
    "brand": "Kia",
    "model": "Seltos",
    "years": "2021",
    "desc": "openpilot upgrades your Kia Seltos with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai A"
  },
  {
    "brand": "Kia",
    "model": "Sorento",
    "years": "2018",
    "desc": "openpilot upgrades your Kia Sorento with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Advanced Smart Cruise Control & LKAS.",
    "harness": "Hyundai E"
  },
  {
    "brand": "Kia",
    "model": "Sorento",
    "years": "2019",
    "desc": "openpilot upgrades your Kia Sorento with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai E"
  },
  {
    "brand": "Kia",
    "model": "Sorento",
    "years": "2021, 2022, 2023",
    "desc": "openpilot upgrades your Kia Sorento with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai K"
  },
  {
    "brand": "Kia",
    "model": "Sorento Hybrid",
    "years": "2021, 2022, 2023",
    "desc": "openpilot upgrades your Kia Sorento Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai A"
  },
  {
    "brand": "Kia",
    "model": "Sorento Plug-in Hybrid",
    "years": "2022, 2023",
    "desc": "openpilot upgrades your Kia Sorento Plug-in Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai A"
  },
  {
    "brand": "Kia",
    "model": "Sportage",
    "years": "2023, 2024",
    "desc": "openpilot upgrades your Kia Sportage with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai N"
  },
  {
    "brand": "Kia",
    "model": "Sportage Hybrid",
    "years": "2023",
    "desc": "openpilot upgrades your Kia Sportage Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai N"
  },
  {
    "brand": "Kia",
    "model": "Stinger",
    "years": "2018, 2019, 2020",
    "desc": "openpilot upgrades your Kia Stinger with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Smart Cruise Control (SCC).",
    "harness": "Hyundai C"
  },
  {
    "brand": "Kia",
    "model": "Stinger",
    "years": "2022, 2023",
    "desc": "openpilot upgrades your Kia Stinger with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai K"
  },
  {
    "brand": "Kia",
    "model": "Telluride",
    "years": "2020, 2021, 2022",
    "desc": "openpilot upgrades your Kia Telluride with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Hyundai H"
  },
  {
    "brand": "Lexus",
    "model": "CT Hybrid",
    "years": "2017, 2018",
    "desc": "openpilot upgrades your Lexus CT Hybrid with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot requires the car to come equipped with Lexus Safety System+.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "ES",
    "years": "2017, 2018",
    "desc": "openpilot upgrades your Lexus ES with automated lane centering and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "ES",
    "years": "2019, 2020, 2021, 2022, 2023, 2024, 2025",
    "desc": "openpilot upgrades your Lexus ES with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "ES Hybrid",
    "years": "2017, 2018",
    "desc": "openpilot upgrades your Lexus ES Hybrid with automated lane centering and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "ES Hybrid",
    "years": "2019, 2020, 2021, 2022, 2023, 2024, 2025",
    "desc": "openpilot upgrades your Lexus ES Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "GS F",
    "years": "2016",
    "desc": "openpilot upgrades your Lexus GS F with automated lane centering and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "IS",
    "years": "2017, 2018, 2019",
    "desc": "openpilot upgrades your Lexus IS with automated lane centering and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "IS",
    "years": "2022, 2023, 2024",
    "desc": "openpilot upgrades your Lexus IS with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "LC",
    "years": "2024, 2025",
    "desc": "openpilot upgrades your Lexus LC with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "LS",
    "years": "2018",
    "desc": "openpilot upgrades your Lexus LS with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot requires the car to come equipped with All except Lexus Safety System+ A.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "NX",
    "years": "2018, 2019",
    "desc": "openpilot upgrades your Lexus NX with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "NX",
    "years": "2020, 2021",
    "desc": "openpilot upgrades your Lexus NX with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "NX Hybrid",
    "years": "2018, 2019",
    "desc": "openpilot upgrades your Lexus NX Hybrid with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "NX Hybrid",
    "years": "2020, 2021",
    "desc": "openpilot upgrades your Lexus NX Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "RC",
    "years": "2018, 2019, 2020",
    "desc": "openpilot upgrades your Lexus RC with automated lane centering and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "RC",
    "years": "2023",
    "desc": "openpilot upgrades your Lexus RC with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "RX",
    "years": "2016",
    "desc": "openpilot upgrades your Lexus RX with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot requires the car to come equipped with Lexus Safety System+.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "RX",
    "years": "2017, 2018, 2019",
    "desc": "openpilot upgrades your Lexus RX with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "RX",
    "years": "2020, 2021, 2022",
    "desc": "openpilot upgrades your Lexus RX with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "RX Hybrid",
    "years": "2016",
    "desc": "openpilot upgrades your Lexus RX Hybrid with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot requires the car to come equipped with Lexus Safety System+.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "RX Hybrid",
    "years": "2017, 2018, 2019",
    "desc": "openpilot upgrades your Lexus RX Hybrid with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "RX Hybrid",
    "years": "2020, 2021, 2022",
    "desc": "openpilot upgrades your Lexus RX Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lexus",
    "model": "UX Hybrid",
    "years": "2019, 2020, 2021, 2022, 2023, 2024",
    "desc": "openpilot upgrades your Lexus UX Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Lincoln",
    "model": "Aviator",
    "years": "2020, 2021, 2022, 2023, 2024",
    "desc": "openpilot upgrades your Lincoln Aviator with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Co-Pilot360 Plus.",
    "harness": "Ford Q3"
  },
  {
    "brand": "Lincoln",
    "model": "Aviator Plug-in Hybrid",
    "years": "2020, 2021, 2022, 2023, 2024",
    "desc": "openpilot upgrades your Lincoln Aviator Plug-in Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot requires the car to come equipped with Co-Pilot360 Plus.",
    "harness": "Ford Q3"
  },
  {
    "brand": "MAN",
    "model": "eTGE",
    "years": "2020, 2021, 2022, 2023, 2024",
    "desc": "openpilot upgrades your MAN eTGE with automated lane centering above 31 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "MAN",
    "model": "TGE",
    "years": "2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024",
    "desc": "openpilot upgrades your MAN TGE with automated lane centering above 31 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Mazda",
    "model": "CX-5",
    "years": "2022, 2023, 2024, 2025",
    "desc": "openpilot upgrades your Mazda CX-5 with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Mazda"
  },
  {
    "brand": "Mazda",
    "model": "CX-9",
    "years": "2021, 2022, 2023",
    "desc": "openpilot upgrades your Mazda CX-9 with automated lane centering above 28 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Mazda"
  },
  {
    "brand": "Nissan",
    "model": "Altima",
    "years": "2019, 2020, 2024",
    "desc": "openpilot upgrades your Nissan Altima with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot requires the car to come equipped with ProPILOT Assist.",
    "harness": "Nissan B"
  },
  {
    "brand": "Nissan",
    "model": "Leaf",
    "years": "2018, 2019, 2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Nissan Leaf with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot requires the car to come equipped with ProPILOT Assist.",
    "harness": "Nissan A"
  },
  {
    "brand": "Nissan",
    "model": "Rogue",
    "years": "2018, 2019, 2020",
    "desc": "openpilot upgrades your Nissan Rogue with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot requires the car to come equipped with ProPILOT Assist.",
    "harness": "Nissan A"
  },
  {
    "brand": "Nissan",
    "model": "X-Trail",
    "years": "2017",
    "desc": "openpilot upgrades your Nissan X-Trail with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot requires the car to come equipped with ProPILOT Assist.",
    "harness": "Nissan A"
  },
  {
    "brand": "Ram",
    "model": "1500",
    "years": "2019, 2020, 2021, 2022, 2023, 2024",
    "desc": "openpilot upgrades your Ram 1500 with automated lane centering above 32 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC).",
    "harness": "Ram"
  },
  {
    "brand": "Rivian",
    "model": "R1S",
    "years": "2022, 2023, 2024",
    "desc": "openpilot upgrades your Rivian R1S with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Rivian A"
  },
  {
    "brand": "Rivian",
    "model": "R1T",
    "years": "2022, 2023, 2024",
    "desc": "openpilot upgrades your Rivian R1T with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Rivian A"
  },
  {
    "brand": "SEAT",
    "model": "Ateca",
    "years": "2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your SEAT Ateca with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "SEAT",
    "model": "Leon",
    "years": "2014, 2015, 2016, 2017, 2018, 2019, 2020",
    "desc": "openpilot upgrades your SEAT Leon with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Subaru",
    "model": "Ascent",
    "years": "2019, 2020, 2021",
    "desc": "openpilot upgrades your Subaru Ascent with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Subaru A"
  },
  {
    "brand": "Subaru",
    "model": "Crosstrek",
    "years": "2018, 2019",
    "desc": "openpilot upgrades your Subaru Crosstrek with automated lane centering at all speeds, and adaptive cruise control. This car may not be able to take tight turns on its own.",
    "support": "openpilot requires the car to come equipped with EyeSight Driver Assistance.",
    "harness": "Subaru A"
  },
  {
    "brand": "Subaru",
    "model": "Crosstrek",
    "years": "2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Subaru Crosstrek with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot requires the car to come equipped with EyeSight Driver Assistance.",
    "harness": "Subaru A"
  },
  {
    "brand": "Subaru",
    "model": "Forester",
    "years": "2019, 2020, 2021",
    "desc": "openpilot upgrades your Subaru Forester with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Subaru A"
  },
  {
    "brand": "Subaru",
    "model": "Impreza",
    "years": "2017, 2018, 2019",
    "desc": "openpilot upgrades your Subaru Impreza with automated lane centering at all speeds, and adaptive cruise control. This car may not be able to take tight turns on its own.",
    "support": "openpilot requires the car to come equipped with EyeSight Driver Assistance.",
    "harness": "Subaru A"
  },
  {
    "brand": "Subaru",
    "model": "Impreza",
    "years": "2020, 2021, 2022",
    "desc": "openpilot upgrades your Subaru Impreza with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot requires the car to come equipped with EyeSight Driver Assistance.",
    "harness": "Subaru A"
  },
  {
    "brand": "Subaru",
    "model": "Legacy",
    "years": "2020, 2021, 2022",
    "desc": "openpilot upgrades your Subaru Legacy with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Subaru B"
  },
  {
    "brand": "Subaru",
    "model": "Outback",
    "years": "2020, 2021, 2022",
    "desc": "openpilot upgrades your Subaru Outback with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Subaru B"
  },
  {
    "brand": "Subaru",
    "model": "XV",
    "years": "2018, 2019",
    "desc": "openpilot upgrades your Subaru XV with automated lane centering at all speeds, and adaptive cruise control. This car may not be able to take tight turns on its own.",
    "support": "openpilot requires the car to come equipped with EyeSight Driver Assistance.",
    "harness": "Subaru A"
  },
  {
    "brand": "Subaru",
    "model": "XV",
    "years": "2020, 2021",
    "desc": "openpilot upgrades your Subaru XV with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot requires the car to come equipped with EyeSight Driver Assistance.",
    "harness": "Subaru A"
  },
  {
    "brand": "Škoda",
    "model": "Fabia",
    "years": "2022, 2023",
    "desc": "openpilot upgrades your Škoda Fabia with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Škoda",
    "model": "Kamiq",
    "years": "2021, 2022, 2023",
    "desc": "openpilot upgrades your Škoda Kamiq with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Škoda",
    "model": "Karoq",
    "years": "2019, 2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Škoda Karoq with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Škoda",
    "model": "Kodiaq",
    "years": "2017, 2018, 2019, 2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Škoda Kodiaq with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Škoda",
    "model": "Octavia",
    "years": "2015, 2016, 2017, 2018, 2019",
    "desc": "openpilot upgrades your Škoda Octavia with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Škoda",
    "model": "Octavia RS",
    "years": "2016",
    "desc": "openpilot upgrades your Škoda Octavia RS with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Škoda",
    "model": "Octavia Scout",
    "years": "2017, 2018, 2019",
    "desc": "openpilot upgrades your Škoda Octavia Scout with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Škoda",
    "model": "Scala",
    "years": "2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Škoda Scala with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Škoda",
    "model": "Superb",
    "years": "2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022",
    "desc": "openpilot upgrades your Škoda Superb with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Tesla",
    "model": "Model 3 (with HW3)",
    "years": "2019, 2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Tesla Model 3 (with HW3) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Tesla A"
  },
  {
    "brand": "Tesla",
    "model": "Model 3 (with HW4)",
    "years": "2024, 2025",
    "desc": "openpilot upgrades your Tesla Model 3 (with HW4) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Tesla B"
  },
  {
    "brand": "Tesla",
    "model": "Model Y (with HW3)",
    "years": "2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Tesla Model Y (with HW3) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Tesla A"
  },
  {
    "brand": "Tesla",
    "model": "Model Y (with HW4)",
    "years": "2024, 2025",
    "desc": "openpilot upgrades your Tesla Model Y (with HW4) with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Tesla B"
  },
  {
    "brand": "Toyota",
    "model": "Alphard",
    "years": "2019, 2020",
    "desc": "openpilot upgrades your Toyota Alphard with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Alphard Hybrid",
    "years": "2021",
    "desc": "openpilot upgrades your Toyota Alphard Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Avalon",
    "years": "2016",
    "desc": "openpilot upgrades your Toyota Avalon with automated lane centering and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot requires the car to come equipped with Toyota Safety Sense P.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Avalon",
    "years": "2017, 2018",
    "desc": "openpilot upgrades your Toyota Avalon with automated lane centering and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Avalon",
    "years": "2019, 2020, 2021",
    "desc": "openpilot upgrades your Toyota Avalon with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Avalon",
    "years": "2022",
    "desc": "openpilot upgrades your Toyota Avalon with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Avalon Hybrid",
    "years": "2019, 2020, 2021",
    "desc": "openpilot upgrades your Toyota Avalon Hybrid with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Avalon Hybrid",
    "years": "2022",
    "desc": "openpilot upgrades your Toyota Avalon Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "C-HR",
    "years": "2017, 2018, 2019, 2020",
    "desc": "openpilot upgrades your Toyota C-HR with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "C-HR",
    "years": "2021",
    "desc": "openpilot upgrades your Toyota C-HR with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "C-HR Hybrid",
    "years": "2017, 2018, 2019, 2020",
    "desc": "openpilot upgrades your Toyota C-HR Hybrid with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "C-HR Hybrid",
    "years": "2021, 2022",
    "desc": "openpilot upgrades your Toyota C-HR Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Camry",
    "years": "2018, 2019, 2020",
    "desc": "openpilot upgrades your Toyota Camry with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Camry",
    "years": "2021, 2022, 2023, 2024",
    "desc": "openpilot upgrades your Toyota Camry with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Camry Hybrid",
    "years": "2018, 2019, 2020",
    "desc": "openpilot upgrades your Toyota Camry Hybrid with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Camry Hybrid",
    "years": "2021, 2022, 2023, 2024",
    "desc": "openpilot upgrades your Toyota Camry Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Corolla",
    "years": "2017, 2018, 2019",
    "desc": "openpilot upgrades your Toyota Corolla with automated lane centering and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Corolla",
    "years": "2020, 2021, 2022",
    "desc": "openpilot upgrades your Toyota Corolla with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Corolla Cross (Non-US only)",
    "years": "2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Toyota Corolla Cross (Non-US only) with automated lane centering and adaptive cruise control while driving above 17 mph. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Corolla Cross Hybrid (Non-US only)",
    "years": "2020, 2021, 2022",
    "desc": "openpilot upgrades your Toyota Corolla Cross Hybrid (Non-US only) with automated lane centering and adaptive cruise control while driving above 17 mph. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Corolla Hatchback",
    "years": "2019, 2020, 2021, 2022",
    "desc": "openpilot upgrades your Toyota Corolla Hatchback with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Corolla Hybrid",
    "years": "2020, 2021, 2022",
    "desc": "openpilot upgrades your Toyota Corolla Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Corolla Hybrid (South America only)",
    "years": "2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Toyota Corolla Hybrid (South America only) with automated lane centering and adaptive cruise control while driving above 17 mph. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Highlander",
    "years": "2017, 2018, 2019",
    "desc": "openpilot upgrades your Toyota Highlander with automated lane centering and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Highlander",
    "years": "2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Toyota Highlander with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Highlander Hybrid",
    "years": "2017, 2018, 2019",
    "desc": "openpilot upgrades your Toyota Highlander Hybrid with automated lane centering and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Highlander Hybrid",
    "years": "2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Toyota Highlander Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Mirai",
    "years": "2021",
    "desc": "openpilot upgrades your Toyota Mirai with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Prius",
    "years": "2016",
    "desc": "openpilot upgrades your Toyota Prius with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot requires the car to come equipped with Toyota Safety Sense P.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Prius",
    "years": "2017, 2018, 2019, 2020",
    "desc": "openpilot upgrades your Toyota Prius with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Prius",
    "years": "2021, 2022",
    "desc": "openpilot upgrades your Toyota Prius with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Prius Prime",
    "years": "2017, 2018, 2019, 2020",
    "desc": "openpilot upgrades your Toyota Prius Prime with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Prius Prime",
    "years": "2021, 2022",
    "desc": "openpilot upgrades your Toyota Prius Prime with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Prius v",
    "years": "2017",
    "desc": "openpilot upgrades your Toyota Prius v with automated lane centering and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot requires the car to come equipped with Toyota Safety Sense P.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "RAV4",
    "years": "2016",
    "desc": "openpilot upgrades your Toyota RAV4 with automated lane centering and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot requires the car to come equipped with Toyota Safety Sense P.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "RAV4",
    "years": "2017, 2018",
    "desc": "openpilot upgrades your Toyota RAV4 with automated lane centering and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "RAV4",
    "years": "2019, 2020, 2021",
    "desc": "openpilot upgrades your Toyota RAV4 with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "RAV4",
    "years": "2022",
    "desc": "openpilot upgrades your Toyota RAV4 with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "RAV4",
    "years": "2023, 2024, 2025",
    "desc": "openpilot upgrades your Toyota RAV4 with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "RAV4 Hybrid",
    "years": "2016",
    "desc": "openpilot upgrades your Toyota RAV4 Hybrid with automated lane centering and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot requires the car to come equipped with Toyota Safety Sense P.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "RAV4 Hybrid",
    "years": "2017, 2018",
    "desc": "openpilot upgrades your Toyota RAV4 Hybrid with automated lane centering and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "RAV4 Hybrid",
    "years": "2019, 2020, 2021",
    "desc": "openpilot upgrades your Toyota RAV4 Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop. Traffic light and stop sign handling is also available in [Experimental mode](https://blog.comma.ai/090release/#experimental-mode).",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "RAV4 Hybrid",
    "years": "2022",
    "desc": "openpilot upgrades your Toyota RAV4 Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "RAV4 Hybrid",
    "years": "2023, 2024, 2025",
    "desc": "openpilot upgrades your Toyota RAV4 Hybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Toyota",
    "model": "Sienna",
    "years": "2018, 2019, 2020",
    "desc": "openpilot upgrades your Toyota Sienna with automated lane centering and adaptive cruise control while driving above 19 mph.",
    "support": "openpilot will work with all packages and trims of this car.",
    "harness": "Toyota A"
  },
  {
    "brand": "Volkswagen",
    "model": "Arteon",
    "years": "2018, 2019, 2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Volkswagen Arteon with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Arteon eHybrid",
    "years": "2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Volkswagen Arteon eHybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Arteon R",
    "years": "2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Volkswagen Arteon R with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Arteon Shooting Brake",
    "years": "2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Volkswagen Arteon Shooting Brake with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Atlas",
    "years": "2018, 2019, 2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Volkswagen Atlas with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Atlas Cross Sport",
    "years": "2020, 2021, 2022",
    "desc": "openpilot upgrades your Volkswagen Atlas Cross Sport with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "California",
    "years": "2021, 2022, 2023",
    "desc": "openpilot upgrades your Volkswagen California with automated lane centering above 31 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Caravelle",
    "years": "2020",
    "desc": "openpilot upgrades your Volkswagen Caravelle with automated lane centering above 31 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "CC",
    "years": "2018, 2019, 2020, 2021, 2022",
    "desc": "openpilot upgrades your Volkswagen CC with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Crafter",
    "years": "2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024",
    "desc": "openpilot upgrades your Volkswagen Crafter with automated lane centering above 31 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "e-Crafter",
    "years": "2018, 2019, 2020, 2021, 2022, 2023, 2024",
    "desc": "openpilot upgrades your Volkswagen e-Crafter with automated lane centering above 31 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "e-Golf",
    "years": "2014, 2015, 2016, 2017, 2018, 2019, 2020",
    "desc": "openpilot upgrades your Volkswagen e-Golf with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Golf",
    "years": "2015, 2016, 2017, 2018, 2019, 2020",
    "desc": "openpilot upgrades your Volkswagen Golf with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Golf Alltrack",
    "years": "2015, 2016, 2017, 2018, 2019",
    "desc": "openpilot upgrades your Volkswagen Golf Alltrack with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Golf GTD",
    "years": "2015, 2016, 2017, 2018, 2019, 2020",
    "desc": "openpilot upgrades your Volkswagen Golf GTD with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Golf GTE",
    "years": "2015, 2016, 2017, 2018, 2019, 2020",
    "desc": "openpilot upgrades your Volkswagen Golf GTE with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Golf GTI",
    "years": "2015, 2016, 2017, 2018, 2019, 2020, 2021",
    "desc": "openpilot upgrades your Volkswagen Golf GTI with automated lane centering at all speeds, and adaptive cruise control.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Golf R",
    "years": "2015, 2016, 2017, 2018, 2019",
    "desc": "openpilot upgrades your Volkswagen Golf R with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Golf SportsVan",
    "years": "2015, 2016, 2017, 2018, 2019, 2020",
    "desc": "openpilot upgrades your Volkswagen Golf SportsVan with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Grand California",
    "years": "2019, 2020, 2021, 2022, 2023, 2024",
    "desc": "openpilot upgrades your Volkswagen Grand California with automated lane centering above 31 mph, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Jetta",
    "years": "2019, 2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Volkswagen Jetta with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Jetta GLI",
    "years": "2021, 2022, 2023",
    "desc": "openpilot upgrades your Volkswagen Jetta GLI with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Passat",
    "years": "2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022",
    "desc": "openpilot upgrades your Volkswagen Passat with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Passat Alltrack",
    "years": "2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022",
    "desc": "openpilot upgrades your Volkswagen Passat Alltrack with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Passat GTE",
    "years": "2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022",
    "desc": "openpilot upgrades your Volkswagen Passat GTE with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Polo",
    "years": "2018, 2019, 2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Volkswagen Polo with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Polo GTI",
    "years": "2018, 2019, 2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Volkswagen Polo GTI with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "T-Cross",
    "years": "2021",
    "desc": "openpilot upgrades your Volkswagen T-Cross with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "T-Roc",
    "years": "2018, 2019, 2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Volkswagen T-Roc with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Taos",
    "years": "2022, 2023, 2024",
    "desc": "openpilot upgrades your Volkswagen Taos with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Teramont",
    "years": "2018, 2019, 2020, 2021, 2022",
    "desc": "openpilot upgrades your Volkswagen Teramont with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Teramont Cross Sport",
    "years": "2021, 2022",
    "desc": "openpilot upgrades your Volkswagen Teramont Cross Sport with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Teramont X",
    "years": "2021, 2022",
    "desc": "openpilot upgrades your Volkswagen Teramont X with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Tiguan",
    "years": "2018, 2019, 2020, 2021, 2022, 2023, 2024",
    "desc": "openpilot upgrades your Volkswagen Tiguan with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Tiguan eHybrid",
    "years": "2021, 2022, 2023",
    "desc": "openpilot upgrades your Volkswagen Tiguan eHybrid with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  },
  {
    "brand": "Volkswagen",
    "model": "Touran",
    "years": "2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023",
    "desc": "openpilot upgrades your Volkswagen Touran with automated lane centering at all speeds, and adaptive cruise control that automatically resumes from a stop.",
    "support": "openpilot requires the car to come equipped with Adaptive Cruise Control (ACC) & Lane Assist.",
    "harness": "VW J533"
  }
]