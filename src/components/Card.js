import { MapPin, Phone, Clock } from "lucide-react";

export default function AddressCard() {
  return (
    <div className="max-w-md bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-pink-100 rounded-full">
          <MapPin className="text-pink-600" size={22} />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Our Store</h3>
          <p className="text-sm text-gray-500">Visit or contact us</p>
        </div>
      </div>

      {/* Address */}
      <p className="text-gray-700 leading-relaxed mb-4">
        123 Main Street,<br />
        Downtown Plaza,<br />
        New York, NY 10001
      </p>

      {/* Info */}
      <div className="space-y-2 text-sm text-gray-600">
       
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>Mon – Sat: 10:00 AM – 8:00 PM</span>
        </div>
      </div>

      {/* Action */}
      <a
        href="https://maps.google.com"
        target="_blank"
        className="block mt-5 text-center bg-pink-500 text-white py-2.5 rounded-lg font-medium hover:bg-pink-600 transition"
      >
        View on Google Maps
      </a>
    </div>
  );
}
