<template>
  <label class="checkbox-label">
    <input type="checkbox" />
    <span class="checkbox-custom rectangular"></span>
  </label>
</template>

<style>
/* Styling Checkbox Starts */
.checkbox-label {
  display: block;
  position: relative;
  margin: auto;
  cursor: pointer;
  font-size: 22px;
  line-height: 24px;
  height: 24px;
  width: 24px;
  clear: both;
  --checkbox-width: 48px;
}

.checkbox-label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkbox-label .checkbox-custom {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 24px;
  width: var(--checkbox-width);
  background-color: transparent;
  border-radius: 20px;
  transition: all 0.3s ease-out;
  border: 2px solid var(--primary-color);
}

.checkbox-label input:checked ~ .checkbox-custom {
  background-color: var(--primary-color);
  border-radius: 20px;
  transform: rotate(0deg) scale(1);
  opacity: 1;
  border: 2px solid var(--primary-color);
}

.checkbox-label .checkbox-custom::after {
  position: absolute;
  content: "";
  left: 12px;
  top: 12px;
  height: 0px;
  width: 0px;
  border-radius: 20px;
  border: solid var(--primary-color);
  border-width: 0 3px 3px 0;
  transform: rotate(0deg) scale(0);
  opacity: 1;
  transition: all 0.3s ease-out;
}

.checkbox-label input ~ .checkbox-custom::after {
  transform: scale(1);
  opacity: 1;
  left: 25px;
  top: 2px;
  width: 12px;
  height: 12px;
  border: solid var(--primary-color);
  border-width: 4px;
  background-color: var(--primary-color);
  border-radius: 50%;
}

.checkbox-label input:checked ~ .checkbox-custom::after {
  transform: scale(1);
  opacity: 1;
  left: 3px;
  top: 2px;
  width: 12px;
  height: 12px;
  border: solid var(--background);
  border-width: 4px;
  background-color: var(--background);
  border-radius: 50%;
}

/* For Ripple Effect */
.checkbox-label .checkbox-custom::before {
  position: absolute;
  content: "";
  left: 10px;
  top: 10px;
  width: 0px;
  height: 0px;
  border-radius: 20px;
  border: 2px solid var(--primary-color);
  transform: scale(0);
}

.checkbox-label input:checked ~ .checkbox-custom::before {
  left: -3px;
  top: -3px;
  width: var(--checkbox-width);
  height: 24px;
  border-radius: 20px;
  transform: scale(3);
  opacity: 0;
  z-index: 999;
  transition: all 0.3s ease-out;
}
</style>
