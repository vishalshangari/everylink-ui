import React, { useState, useRef } from "react";
import {
  SelectSettingProps,
  SliderSettingProps,
  SpacingSettingProps,
  ColorSettingProps,
} from "./models";
import styled, { css } from "styled-components";
import { SettingsItem } from "..";
import { SketchPicker, ColorResult } from "react-color";
import { EditableInput } from "react-color/lib/components/common";
import { useClickAway } from "react-use";

export const SelectSetting: React.FC<SelectSettingProps> = ({
  label,
  options,
  initValue,
  autoText,
  handleAutoChange,
}) => {
  const [value, setValue] = useState(initValue);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    {
      handleAutoChange &&
        handleAutoChange(
          e.target.value === `Auto (recommended)` ? true : false
        );
    }
  };
  return (
    <SelectSettingInner>
      <SelectLabel htmlFor={label}>{label}</SelectLabel>
      <BaseSelect
        value={value}
        name={label}
        id={label}
        onChange={(e) => handleChange(e)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </BaseSelect>
      {value === `Auto` && (
        <SettingsDescription>{autoText}</SettingsDescription>
      )}
    </SelectSettingInner>
  );
};

export const SliderSetting: React.FC<SliderSettingProps> = ({
  label,
  initValue,
  min,
  max,
  step,
}) => {
  const [value, setValue] = useState(initValue ? initValue : 0);
  return (
    <SliderSettingInner>
      <SliderLabel htmlFor={label}>{label}</SliderLabel>
      <SliderValue>{value}</SliderValue>
      <BaseSlider>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
      </BaseSlider>
    </SliderSettingInner>
  );
};

export const SpacingSetting: React.FC<SpacingSettingProps> = ({ type }) => {
  const options = ["Auto (recommended)", "Custom"];
  const [auto, setAuto] = useState(true);
  const handleAutoChange = (val: boolean) => setAuto(val);
  return (
    <>
      <SettingsItem>
        <SelectSetting
          label={type}
          options={options}
          initValue={auto ? options[0] : options[1]}
          autoText="Automatically set margins for the best layout."
          handleAutoChange={handleAutoChange}
        />
      </SettingsItem>

      <SettingsItem>
        <SpacerOptions active={!auto}>
          <SpaceX>
            <SpaceXInner left>
              <SpaceLabel>L</SpaceLabel>
              <SpaceInput type="text" disabled={auto} />
            </SpaceXInner>
          </SpaceX>
          <SpaceY>
            <SpaceYInner top>
              <SpaceLabel>Top</SpaceLabel>
              <SpaceInput type="text" disabled={auto} />
            </SpaceYInner>
            <SpaceYInner>
              <SpaceLabel>Bottom</SpaceLabel>
              <SpaceInput type="text" disabled={auto} />
            </SpaceYInner>
          </SpaceY>
          <SpaceX>
            <SpaceXInner>
              <SpaceLabel>R</SpaceLabel>
              <SpaceInput type="text" disabled={auto} />
            </SpaceXInner>
          </SpaceX>
        </SpacerOptions>
      </SettingsItem>
    </>
  );
};

export const ColorSetting: React.FC<ColorSettingProps> = ({ label }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState("#000000");
  const ref = useRef(null);
  const showColorPicker = (
    event: React.MouseEvent | React.FocusEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setDisplayColorPicker(true);
  };

  const handleColorChange = (newColor: ColorResult) => {
    setColor(newColor.hex);
  };

  const handleInputColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleCloseColorPicker = () => {
    setDisplayColorPicker(false);
  };

  useClickAway(ref, () => {
    handleCloseColorPicker();
  });
  return (
    <SettingsItem>
      <ColorLabel>{label}</ColorLabel>
      <ColorSettingInner ref={ref}>
        <ColorDisplay onClick={showColorPicker} color={color} />
        <ColorInputWrap>
          {/* // TODO: add validation for hex input */}
          <ColorInput
            onFocus={showColorPicker}
            value={color}
            onChange={handleInputColorChange}
          />
        </ColorInputWrap>
        {displayColorPicker && (
          <ColorPickerDisplay>
            <SketchPicker
              disableAlpha
              color={color}
              onChange={handleColorChange}
              presetColors={[]}
            />
          </ColorPickerDisplay>
        )}
      </ColorSettingInner>
    </SettingsItem>
  );
};

// Generic components

const BaseLabelStyles = css`
  margin-bottom: 1rem;
  font-weight: bold;
  display: inline-block;
  text-transform: capitalize;
`;

const BaseFormFocusStyles = css`
  transition: box-shadow 0.2s ease;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.formAccent};
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;

const SelectSettingInner = styled.div``;

export const SettingsDescription = styled.div`
  color: ${(props) => props.theme.colors.textTertiary};
  grid-column: 1 / span 2;
  ${(props) => props.theme.flex.column};
  justify-content: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

// Select input

const SelectLabel = styled.label`
  ${BaseLabelStyles}
  width: 100%;
`;

const SelectArrow = css`
  background-image: ${(props) =>
    `url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='%23${props.theme.colors.textSecondary.slice(
      1
    )}' stroke-width='0' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E")`};
  background-repeat: no-repeat, repeat;
  background-position: right 1em top 50%, 0 0;
  background-size: 1em auto, 100%;
`;

const BaseSelect = styled.select`
  background: ${(props) => props.theme.colors.dashboardInputBg};
  border: none;
  border-radius: 0.25em;
  outline: none;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors.textSecondary};
  width: 100%;
  padding: 1rem 2.5rem 1rem 1rem;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  ${SelectArrow};
  ${BaseFormFocusStyles};
`;

// Slider input

const SliderSettingInner = styled.div`
  ${(props) => props.theme.flex.row}
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SliderLabel = styled.label`
  ${BaseLabelStyles}
`;

const SliderValue = styled.div`
  color: ${(props) => props.theme.colors.textTertiary};
`;

const BaseSlider = styled.div`
  border: none;
  outline: none;
  color: ${(props) => props.theme.colors.textSecondary};
  width: 100%;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  flex-basis: 100%;
  align-items: center;
  ${(props) => props.theme.flex.row}
  input {
    -webkit-appearance: none;
    width: 100%;
    border-radius: 0.25em;
    background: ${(props) => props.theme.colors.dashboardInputBg};
    height: 3.125rem;
    padding: 0 1rem;
    border-color: transparent;
    color: transparent;
    ${BaseFormFocusStyles};
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 1.75rem;
      width: 0.75rem;
      border-radius: 0.5rem;
      background: ${(props) => props.theme.colors.textSecondary};
      cursor: pointer;
      margin-top: -0.75rem;
    }
    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 0.25rem;
      cursor: pointer;
      background: ${(props) => props.theme.colors.sliderTrack};
      border-radius: 1.3px;
    }
    &::-ms-track {
      width: 100%;
      cursor: pointer;
    }
  }
`;

// Spacer settings

const SpacerOptions = styled.div<{ active: boolean }>`
  ${(props) => props.theme.flex.row};
  opacity: ${({ active }) => (active ? `1` : `0.5`)};
`;

const SpaceInput = styled.input`
  width: 3rem;
  border: none;
  background: ${(props) => props.theme.colors.dashboardInputBg};
  border-radius: 0.25em;
  text-align: center;
  font-size: 0.875rem;
  padding: 0.5em 0.75em;
  color: ${(props) => props.theme.colors.textSecondary};
  ${BaseFormFocusStyles};
`;

const SpaceLabel = styled.label`
  color: ${(props) => props.theme.colors.textTertiary};
  font-size: 0.75em;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
`;

const SpaceY = styled.div`
  ${(props) => props.theme.flex.column};
  justify-content: center;
  align-items: center;
  flex: 2;
`;

const SpaceYInner = styled.div<{ top?: boolean }>`
  ${(props) => props.theme.flex.column};
  align-items: center;
  ${({ top }) => (top ? "margin-bottom: 0.5rem" : ``)};
  ${SpaceLabel} {
    display: block;
    ${({ top }) =>
      top
        ? "order: 0; margin-bottom: 0.375rem"
        : `order: 1; margin-top: 0.375rem`};
  }
`;

const SpaceX = styled.div`
  margin: 1rem 0;
  ${(props) => props.theme.flex.row};
  justify-content: center;
  flex: 3;
`;

const SpaceXInner = styled.div<{ left?: boolean }>`
  ${(props) => props.theme.flex.row};
  align-items: center;
  ${SpaceLabel} {
    ${({ left }) =>
      left
        ? "order: 0; margin-right: 0.375rem"
        : `order: 1; margin-left: 0.375rem`}
  }
  input {
    flex-grow: 1;
  }
`;

// Color Setting

const ColorLabel = styled.label`
  ${BaseLabelStyles}
  width: 100%;
`;

const ColorSettingInner = styled.div`
  ${(props) => props.theme.flex.row}
  height: 3.125em;
  align-items: center;
  position: relative;
`;

const ColorDisplay = styled.button<{ color: string }>`
  border: none;
  outline: none;
  width: 2.125em;
  height: 2.125em;
  position: absolute;
  left: 0.5em;
  background: ${({ color }) => color};
  border-radius: 0.25em;
  cursor: pointer;
`;

const ColorInputWrap = styled.div`
  flex-grow: 1;
`;

const ColorInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  height: 3.125em;
  padding: 1rem 1rem 1rem 3.125em;
  background: ${(props) => props.theme.colors.dashboardInputBg};
  border-radius: 0.25em;
  color: ${(props) => props.theme.colors.textSecondary};
  ${BaseFormFocusStyles}
`;

const ColorPickerDisplay = styled.div`
  position: absolute;
  top: calc(100% + 1em);
  left: 0;
  z-index: 20;
`;

const ColorPickerClickawayListener = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
