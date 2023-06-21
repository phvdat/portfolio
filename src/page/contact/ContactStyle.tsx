import { Theme, css, keyframes } from '@emotion/react';
import { media } from 'style/responsive-helper';

export const contactStyle = {
  self: ({ spacing }: Theme) =>
    css({
      paddingTop: spacing?.[7],
      paddingBottom: spacing?.[8]
    }),

  title: ({ fontWeight, fontSize, spacing }: Theme) =>
    css({
      fontSize: fontSize?.xxxl,
      fontWeight: fontWeight?.tertiary,
      textAlign: 'center',
      marginBottom: spacing?.[11]
    }),

  container: ({ spacing }: Theme) =>
    css({
      display: 'flex',
      gap: spacing?.[7],
      [media('lg')]: css({
        flexDirection: 'column'
      })
    }),

  left: ({ spacing, borderRadius }: Theme) =>
    css({
      padding: spacing?.[7],
      width: '100%',
      flexBasis: '400px',
      background: 'var(--background-linear)',
      boxShadow: 'var(--box-shadow-lg)',
      borderRadius: borderRadius?.sm
    }),

  name: ({ fontWeight, fontSize, spacing }: Theme) =>
    css({
      fontSize: fontSize?.lg,
      fontWeight: fontWeight?.secondary,
      marginTop: spacing?.[7]
    }),

  position: ({ fontWeight, fontSize, spacing }: Theme) =>
    css({
      fontSize: fontSize?.md,
      fontWeight: fontWeight?.primary,
      marginTop: spacing?.[6],
      color: 'var(--text-tertiary)'
    }),

  infoDescription: ({ fontWeight, fontSize, spacing }: Theme) =>
    css({
      fontSize: fontSize?.sm,
      fontWeight: fontWeight?.primary,
      marginTop: spacing?.[6]
    }),

  email: ({ fontWeight, fontSize, spacing, colors }: Theme) =>
    css({
      fontSize: fontSize?.sm,
      fontWeight: fontWeight?.primary,
      marginTop: spacing?.[6],
      marginBottom: spacing?.[6],
      '> a': {
        color: colors?.red?.[100],
        ':after': {
          transition: 'transform 0.4s ease-out',
          display: 'block',
          content: "''",
          height: '1px',
          transform: 'scaleX(0)',
          transformOrigin: 'bottom right',
          backgroundColor: colors?.red?.[100],
          borderRadius: '1px'
        },
        ':hover': {
          ':after': {
            transform: 'scaleX(1)',
            transformOrigin: 'bottom left'
          }
        }
      }
    }),

  right: ({ borderRadius, spacing }: Theme) =>
    css({
      flexGrow: 1,
      flexBasis: '600px',
      background: 'var(--background-linear)',
      boxShadow: 'var(--box-shadow-lg)',
      borderRadius: borderRadius?.sm,
      padding: spacing?.[7]
    }),

  formGroup: ({ spacing }: Theme) =>
    css({
      marginBottom: spacing?.[7],
      display: 'flex',
      flexDirection: 'column'
    }),
  groupTwoField: ({ spacing }: Theme) =>
    css({
      marginBottom: spacing?.[7],
      display: 'flex',
      gap: spacing?.[5],
      [media('sm')]: css({
        flexDirection: 'column',
        gap: spacing?.[7]
      }),
      '> div': {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }
    }),
  customLabel: ({ fontSize, spacing }: Theme) =>
    css({
      fontSize: fontSize?.xs,
      marginBottom: spacing?.[4]
    }),

  customInput: ({ spacing, borderRadius }: Theme) =>
    css({
      padding: `${spacing?.[4]} ${spacing?.[3]}`,
      background: 'var(--background-secondary)',
      border: `1px solid var(--background-tertiary)`,
      borderRadius: borderRadius?.sm,
      color: 'var(---text-primary)',
      ':focus': {
        outline: 'none'
      }
    }),

  inputError: ({ colors }: Theme) =>
    css({
      outline: `1px solid ${colors?.red?.[100]}`,
      ':focus': {
        outline: `1px solid ${colors?.red?.[100]}`
      }
    }),

  textError: ({ colors, fontSize, spacing }: Theme) =>
    css({
      fontSize: fontSize?.xs,
      color: colors?.red?.[100],
      marginTop: spacing?.[2]
    }),

  customButton: ({ spacing, borderRadius }: Theme) =>
    css({
      cursor: 'pointer',
      width: '100%',
      color: 'var(---text-primary)',
      background: 'var(--background-secondary)',
      paddingTop: spacing?.[4],
      paddingBottom: spacing?.[4],
      border: 'none',
      transition: 'all 400ms easy',
      boxShadow: 'var(--box-shadow-md)',
      borderRadius: borderRadius?.sm,
      '&:hover': {
        backgroundImage: 'var(--background-card)'
      }
    })
};
