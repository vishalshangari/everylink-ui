import React, { useState, useRef } from "react";
import {
  SelectSettingProps,
  SliderSettingProps,
  SpacingSettingProps,
  ColorSettingProps,
  AlignmentSettingProps,
} from "./models";
import styled, { css } from "styled-components";
import { SettingsItem, SidePaddedDashboardContainer } from "..";
import { SketchPicker, ColorResult } from "react-color";
import { useClickAway } from "react-use";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import {
  MdFormatAlignLeft,
  MdFormatAlignCenter,
  MdFormatAlignRight,
  MdFormatAlignJustify,
} from "react-icons/md";

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
    handleAutoChange &&
      handleAutoChange(e.target.value === `Auto (recommended)` ? true : false);
  };
  return (
    <>
      <SelectLabel htmlFor={label}>{label}</SelectLabel>
      <SelectSettingInner>
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
        {(value === `Auto` || value === `Auto (recommended)`) && (
          <SettingsDescription>{autoText}</SettingsDescription>
        )}
      </SelectSettingInner>
    </>
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
  const [aspectRatioLock, setAspectRatioLock] = useState(false);
  const [values, setValues] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });
  const handleAutoChange = (val: boolean) => setAuto(val);
  const handleAspectRatioToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setAspectRatioLock((prevAspectRatioLock) => !prevAspectRatioLock);
  };
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const id = e.target.id;
    const newVal = parseInt(e.target.value);
    // Temporary validation
    if (isNaN(newVal)) {
      return;
    }
    setValues((prevValues) => {
      if (aspectRatioLock) {
        console.log("lock");
        return id === "top" || id === "bottom"
          ? { ...prevValues, top: newVal, bottom: newVal }
          : { ...prevValues, left: newVal, right: newVal };
      } else {
        console.log("unlock");
        return { ...prevValues, [id]: newVal };
      }
    });
    console.log(values);
  };
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
        {!auto && (
          <SpacerSettingAspectRatioLock>
            <CustomCheckbox>
              <input
                onChange={handleAspectRatioToggle}
                checked={aspectRatioLock}
                type="checkbox"
              />
              <CustomCheckboxIcon checked={aspectRatioLock} />
              <CheckboxLabel>
                {`Lock vertical and horizontal ${type}`}
              </CheckboxLabel>
            </CustomCheckbox>
          </SpacerSettingAspectRatioLock>
        )}
      </SettingsItem>

      <SettingsItem>
        <SpacerOptions active={!auto}>
          <SpaceX>
            <SpaceXInner left>
              <SpaceLabel>L</SpaceLabel>
              <SpaceInput
                id="left"
                onChange={handleValueChange}
                type="text"
                disabled={auto}
                value={values.left}
              />
            </SpaceXInner>
          </SpaceX>
          <SpaceY>
            <SpaceYInner top>
              <SpaceLabel>Top</SpaceLabel>
              <SpaceInput
                id="top"
                onChange={handleValueChange}
                type="text"
                disabled={auto}
                value={values.top}
              />
            </SpaceYInner>
            <SpaceYInner>
              <SpaceLabel>Bottom</SpaceLabel>
              <SpaceInput
                id="bottom"
                onChange={handleValueChange}
                type="text"
                disabled={auto}
                value={values.bottom}
              />
            </SpaceYInner>
          </SpaceY>
          <SpaceX>
            <SpaceXInner>
              <SpaceLabel>R</SpaceLabel>
              <SpaceInput
                id="right"
                onChange={handleValueChange}
                type="text"
                disabled={auto}
                value={values.right}
              />
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
  const colorPickerRef = useRef(null);
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

  useClickAway(colorPickerRef, () => {
    handleCloseColorPicker();
  });
  return (
    <SettingsItem>
      <ColorLabel>{label}</ColorLabel>
      <ColorSettingInner ref={colorPickerRef}>
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

export const AlignmentSetting: React.FC<AlignmentSettingProps> = ({
  label,
}) => {
  const [alignment, setAlignment] = useState(`left`);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setAlignment(e.currentTarget.value);
  };
  const options = [
    { align: "left", icon: <MdFormatAlignLeft /> },
    { align: "center", icon: <MdFormatAlignCenter /> },
    { align: "right", icon: <MdFormatAlignRight /> },
    { align: "justify", icon: <MdFormatAlignJustify /> },
  ];
  return (
    <SettingsItem>
      <AlignmentLabel>{label}</AlignmentLabel>
      <AlignmentSettingInner>
        {options.map((option, index) => (
          <AlignmentSettingButton
            onClick={handleClick}
            active={alignment === option.align}
            key={index}
            value={option.align}
          >
            {option.icon}
          </AlignmentSettingButton>
        ))}
      </AlignmentSettingInner>
    </SettingsItem>
  );
};

export const TextAreaInput: React.FC = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [editorInFocus, setEditorInFocus] = useState(false);
  const editor = useRef<Editor>(null);
  const editorWrapRef = useRef(null);
  useClickAway(editorWrapRef, () => {
    setEditorInFocus(false);
  });
  const handleEditorClick = () => {
    if (editor && editor.current) {
      setEditorInFocus(true);
      editor.current.focus();
    }
  };
  return (
    <>
      <TextAreaInputWrap>
        <EditorOuterWrap
          ref={editorWrapRef}
          focus={editorInFocus}
          onClick={handleEditorClick}
        >
          <EditorInnerWrap>
            <EditorWrap>
              <Editor
                ref={editor}
                editorState={editorState}
                onChange={setEditorState}
                placeholder="Enter text here..."
                onFocus={() => setEditorInFocus(true)}
              />
            </EditorWrap>
          </EditorInnerWrap>
        </EditorOuterWrap>
      </TextAreaInputWrap>
    </>
  );
};

// Generic components

// Generic text box component
// const DashboardDescription = styled(SidePaddedDashboardContainer)`
//   color: ${({ theme }) => theme.colors.textSecondary};
// `;

const CustomCheckbox = styled.label`
  color: ${({ theme }) => theme.colors.textSecondary};
  position: relative;
  ${({ theme }) => theme.flex.row};
  align-items: center;
  justify-content: center;
  input {
    position: absolute;
    left: -9999px;
    opacity: 0;
  }
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

const CheckboxLabel = styled.div`
  margin-left: 1rem;
  flex-grow: 1;
`;

const CustomCheckboxIcon = styled.span<{ checked: boolean }>`
  height: 1.25rem;
  min-width: 1.25rem;
  max-width: 1.25rem;
  border-radius: 0.125em;
  background: ${({ theme }) => theme.colors.dashboardInputBg};
  background-image: ${(props) =>
    props.checked
      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0.75rem' height='0.75rem' viewBox='0 0 512 512'%3E%3Ctitle%3Eionicons-v5-g%3C/title%3E%3Cpath fill='%23${props.theme.colors.textSecondaryRGB.slice(
          1
        )}' d='M368,192H352V112a96,96,0,1,0-192,0v80H144a64.07,64.07,0,0,0-64,64V432a64.07,64.07,0,0,0,64,64H368a64.07,64.07,0,0,0,64-64V256A64.07,64.07,0,0,0,368,192Zm-48,0H192V112a64,64,0,1,1,128,0Z'/%3E%3C/svg%3E")`
      : `none;`};
  background-repeat: no-repeat;
  background-position: center;
`;

const BaseLabelStyles = css`
  margin-bottom: 1rem;
  font-weight: bold;
  display: inline-block;
  text-transform: capitalize;
`;

const BaseFormFocusStyles = css`
  transition: box-shadow 0.2s ease;
  transition: color 0.2s ease;
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
  line-height: 1.125rem;
`;

// Select input

const SelectLabel = styled.label`
  ${BaseLabelStyles}
  width: 100%;
`;

const SelectArrow = css`
  background-image: ${(props) =>
    `url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='%23${props.theme.colors.textSecondaryRGB.slice(
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
  cursor: pointer;
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
    height: 3rem;
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
  transition: opacity 0.2s ease;
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

const SpacerSettingAspectRatioLock = styled.div`
  ${CustomCheckbox} {
    margin-top: 1rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textTertiary};
  }
  ${CheckboxLabel} {
    margin-left: 0.5rem;
    line-height: 1.125rem;
  }
`;

// Color Setting

const ColorLabel = styled.label`
  ${BaseLabelStyles}
  width: 100%;
`;

const ColorSettingInner = styled.div`
  ${(props) => props.theme.flex.row}
  height: 3em;
  align-items: center;
  position: relative;
`;

const ColorDisplay = styled.button<{ color: string }>`
  border: none;
  outline: none;
  width: 1.875em;
  height: 1.875em;
  position: absolute;
  left: 0.625em;
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
  height: 3rem;
  padding: 1rem 1rem 1rem 3rem;
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

// Alignment settings

const AlignmentLabel = styled.div`
  ${BaseLabelStyles};
`;

const AlignmentSettingInner = styled.div`
  ${({ theme }) => theme.flex.row};
`;

const AlignmentSettingButton = styled.button<{ active: boolean }>`
  flex: 1;
  border: none;
  outline: none;
  ${({ theme }) => theme.flex.centered};
  font-size: 1.5rem;
  height: 3rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ active, theme }) =>
    active
      ? theme.colors.dashboardSettingsButtonActive
      : theme.colors.dashboardInputBg};
  color: ${({ active, theme }) =>
    active ? theme.colors.textPrimary : theme.colors.textSecondary};
  margin-right: 1px;
  cursor: pointer;
  transition: 0.1s ease all;
  &:first-child {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  &:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    margin-right: none;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.dashboardSettingsButtonActive};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

// Text input

const TextAreaInputWrap = styled(SidePaddedDashboardContainer)`
  margin-bottom: 2rem;
`;

const EditorOuterWrap = styled.div<{ focus: boolean }>`
  background: ${({ theme }) => theme.colors.dashboardInputBg};
  border-radius: 0.25em;
  transition: 0.2s ease all;
  padding: 0 0.25rem 0 0;
  box-shadow: ${({ focus, theme }) =>
    focus ? `0 0 0 1px ${theme.colors.formAccent}` : `none`};
`;

const EditorInnerWrap = styled.div`
  padding: 1rem 0.75rem;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0.5em;
    cursor: pointer;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.textTertiary};
    border-radius: 0.375em;
    margin-right: 0.125em;
    -webkit-transition: 0.3s ease all;
    &:hover {
      background: ${(props) => props.theme.colors.textSecondary};
    }
  }
`;

const EditorWrap = styled.div`
  min-height: 8rem;
  max-height: 32rem;
  transition: 0.2s ease all;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: text;
  overflow-y: contain;
`;
