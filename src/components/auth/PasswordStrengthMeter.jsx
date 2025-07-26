"use client";
const PasswordStrengthMeter = ({ password }) => {
  const calculateStrength = () => {
    if (!password) return 0;

    let strength = 0;
    // check the length of password
    if (password.length >= 8) strength += 1;
    // contains uppercase character
    if (/[A-Z]/.test(password)) strength += 1;
    // contains lowercase char
    if (/[a-z]/.test(password)) strength += 1;
    // contains number
    if (/[0-9]/.test(password)) strength += 1;
    //contain special character
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    return (strength / 5) * 100;
  };

  const strength = calculateStrength();
  const strengthColor =
    strength < 40 ? "red" : strength < 70 ? "orange" : "green";

  return (
    <div className="password-strength-meter">
      <div className="strength-bar">
        <div
          style={{
            width: `${strength}%`,
            height: "4px",
            backgroundColor: strengthColor,
            borderRadius: "2px",
            transition: "all 0.3s ease",
          }}
        />
      </div>
      <small style={{ color: strengthColor }}>
        {!password
          ? ""
          : strength < 40
          ? "Weak"
          : strength < 70
          ? "Moderate"
          : "Strong"}
      </small>
    </div>
  );
};

export default PasswordStrengthMeter;
