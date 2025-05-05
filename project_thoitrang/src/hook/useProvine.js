// ProvinceSelector.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProvinceSelector = () => {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedWard, setSelectedWard] = useState(null);

  const host = "https://provinces.open-api.vn/api/";

  useEffect(() => {
    axios.get(`${host}?depth=1`).then((res) => {
      setCities(res.data);
    });
  }, []);

  useEffect(() => {
    if (selectedCity) {
      axios.get(`${host}p/${selectedCity.code}?depth=2`).then((res) => {
        setDistricts(res.data.districts);
        setWards([]); // Reset phường khi đổi tỉnh
        setSelectedDistrict(null);
        setSelectedWard(null);
      });
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedDistrict) {
      axios.get(`${host}d/${selectedDistrict.code}?depth=2`).then((res) => {
        setWards(res.data.wards);
        setSelectedWard(null);
      });
    }
  }, [selectedDistrict]);

  return (
    <div className="space-y-4">
      {/* Tỉnh/Thành phố */}
      <select
        onChange={(e) => {
          const city = cities.find((c) => c.name === e.target.value);
          setSelectedCity(city);
        }}
        className="border p-2 w-full"
        defaultValue=""
      >
        <option disabled value="">Chọn Tỉnh / Thành phố</option>
        {cities.map((city) => (
          <option key={city.code} value={city.name}>{city.name}</option>
        ))}
      </select>

      {/* Quận/Huyện */}
      <select
        onChange={(e) => {
          const district = districts.find((d) => d.name === e.target.value);
          setSelectedDistrict(district);
        }}
        className="border p-2 w-full"
        value={selectedDistrict?.name || ""}
        disabled={!selectedCity}
      >
        <option disabled value="">Chọn Quận / Huyện</option>
        {districts.map((district) => (
          <option key={district.code} value={district.name}>{district.name}</option>
        ))}
      </select>

      {/* Phường/Xã */}
      <select
        onChange={(e) => {
          const ward = wards.find((w) => w.name === e.target.value);
          setSelectedWard(ward);
        }}
        className="border p-2 w-full"
        value={selectedWard?.name || ""}
        disabled={!selectedDistrict}
      >
        <option disabled value="">Chọn Phường / Xã</option>
        {wards.map((ward) => (
          <option key={ward.code} value={ward.name}>{ward.name}</option>
        ))}
      </select>
    </div>
  );
};

export default ProvinceSelector;
