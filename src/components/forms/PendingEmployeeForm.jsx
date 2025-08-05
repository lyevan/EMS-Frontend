import { useState } from "react";
import axios from "axios";
import Input from "./Input";
import Select from "./Select";
import {
  Mail,
  Phone,
  Building,
  BriefcaseBusiness,
  PhilippinePeso,
  CalendarPlus,
} from "lucide-react";

const PendingEmployeeForm = ({ isModalOpen, setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    department: "",
    position: "",
    hourly_rate: "",
    hire_date: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async () => {
    console.log(formData);
    try {
      setIsLoading(true);
      const response = await axios.post("/invite/pending", formData);
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <dialog
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      className="modal"
    >
      <div className="modal-box shadow-none outline-2 outline-neutral">
        <form method="dialog" onSubmit={() => handleSubmit()}>
          <h3 className="font-bold text-lg">Add Pending Employee</h3>
          <p className="pt-4 pb-1 text-xs">Please fill in the details below:</p>
          <p className="pb-4 pl-2 text-error text-xs">* Required</p>
          <div className="fieldset grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              icon={<Mail />}
              label="Email"
              name="email"
              type="email"
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <Input
              icon={<Phone />}
              label="Phone Number"
              name="phone"
              type="tel"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <Select
              icon={<Building />}
              label="Department"
              name="department"
              required
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              }
              options={[
                { value: "1", label: "HR" },
                { value: "2", label: "Engineering" },
                { value: "3", label: "Sales" },
              ]}
            />
            <Select
              icon={<BriefcaseBusiness />}
              label="Position"
              name="position"
              required
              onChange={(e) =>
                setFormData({ ...formData, position: e.target.value })
              }
              options={[
                { value: "1", label: "Supervisor" },
                { value: "2", label: "Manager" },
                { value: "3", label: "Staff" },
              ]}
            />
            <Input
              icon={<PhilippinePeso />}
              label="Hourly Rate"
              name="hourly_rate"
              type="number"
              required
              onChange={(e) =>
                setFormData({ ...formData, hourly_rate: e.target.value })
              }
            />
            <Input
              icon={<CalendarPlus />}
              label="Hire Date"
              name="hire_date"
              type="date"
              required
              onChange={(e) =>
                setFormData({ ...formData, hire_date: e.target.value })
              }
            />
          </div>

          <div className="modal-action">
            <button className="btn btn-info" type="submit">
              Submit
            </button>
            <button
              className="btn btn-error"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default PendingEmployeeForm;
