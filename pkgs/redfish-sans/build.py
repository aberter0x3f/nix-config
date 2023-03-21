#!/usr/bin/env fontforge
# -*- coding: utf-8 -*-

import fontforge

def set_font_info(font, is_italic, weight):
    font.fontname="RedFish-Sans-"+weight+('Italic' if is_italic else '')
    font.familyname="RedFish Sans"
    font.fullname="RedFish Sans "+weight+(' Italic' if is_italic else '')
    font.weight=weight
    if weight=="Light":
        font.os2_weight=300
    font.copyright='''
    Copyright (c) 2023, yzy1 (github.com/yzy-1).
    Portions Copyright (c) 2015-2022, Renzhi Li (aka. Belleve Invis, belleve@typeof.net).
    Portions Copyright (c) 2016-2020 The Inter Project Authors.
    Portions Copyright (c) 2022 Buernia (https://github.com/Buernia), with Reserved Font Name 'Zhudou'.
    Portions Copyright (c) 2012-2016 The Mozilla Foundation and Telefonica S.A.
    Portions Copyright (c) 2014, 2015 Adobe Systems Incorporated (http://www.adobe.com/). Portions Copyright (c) 2012 Google Inc.
    '''

def output_pdf(font, text, file_name):
    fontforge.printSetup("pdf-file")
    font.printSample("fontsample", 20, text, file_name)

def duplicate_lookup(font, prefix, old, new):
    name = list(filter(lambda x: x.startswith("%s'%s'" % (prefix, old)), font.gpos_lookups))[0]
    info = list(font.getLookupInfo(name))
    feats = list(info[2])
    lang = list(filter(lambda x: x[0]==old, feats))[0][1]
    feats.append((new, lang))
    font.lookupSetFeatureList(name, tuple(feats))

def remove_feature(font, prefix, name):
    for lookup in filter(lambda x:x.startswith("%s'%s'" % (prefix, name)), font.gsub_lookups):
        # print(lookup)
        for subtable in font.getLookupSubtables(lookup)[:]:
            font.removeLookupSubtable(subtable, 1)
        font.removeLookup(lookup, 1)

def freezen_zero(font):
    for zero_variant in list(filter(lambda x:x.glyphname.endswith('.zero'), font.glyphs())):
        sel=font.selection.byGlyphs
        sel.select(zero_variant.glyphname[:-len('.zero')])
        non_zero_variant = list(sel)[0]
        # print(non_zero_variant)
        sel.none()
        zero_variant.unicode = non_zero_variant.unicode
        zero_variant.glyphname = non_zero_variant.glyphname
        font.removeGlyph(non_zero_variant)

def make_font(weight, is_italic, zd_file, fs_file, s_file):
    font=fontforge.font()
    set_font_info(font, is_italic, weight)

    zd_name = fontforge.open(zd_file).fontname
    font.mergeFonts(zd_file, True)

    duplicate_lookup(font, zd_name + '-', 'chws', 'kern')
    remove_feature(font, zd_name + '-', 'locl')

    fs_name = fontforge.open(fs_file).fontname
    font.mergeFonts(fs_file, True)

    s_name = fontforge.open(s_file).fontname
    font.mergeFonts(s_file, True)
    remove_feature(font, s_name, 'locl')

    freezen_zero(font)
    remove_feature(font, zd_name + '-', 'zero')
    remove_feature(font, fs_name + '-', 'zero')
    remove_feature(font, s_name + '-', 'zero')

    # output_pdf(font, "０ 012 VAWA 测试：「Test」（Kern）．", 'a.pdf')
    font.generate('RedFish-%s.otf' % (weight+('Italic' if is_italic else '')))

make_font('ExtraLight', False, 'Zhudou Sans ExtraLight.ttf', 'FiraGO-Thin.otf' , 'sarasa-extralight.ttc(Sarasa UI SC Xlight)')
make_font('ExtraLight', True, 'Zhudou Sans ExtraLight.ttf', 'FiraGO-ThinItalic.otf' , 'sarasa-extralightitalic.ttc(Sarasa UI SC Xlight Italic)')
make_font('Light', False, 'Zhudou Sans Light.ttf', 'FiraGO-Light.otf', 'sarasa-light.ttc(Sarasa UI SC Light)')
make_font('Light', True, 'Zhudou Sans Light.ttf', 'FiraGO-LightItalic.otf', 'sarasa-lightitalic.ttc(Sarasa UI SC Light Italic)')
make_font('Regular', False, 'Zhudou Sans Regular.ttf', 'FiraGO-Regular.otf', 'sarasa-regular.ttc(Sarasa UI SC)')
make_font('Regular', True, 'Zhudou Sans Regular.ttf', 'FiraGO-Italic.otf', 'sarasa-italic.ttc(Sarasa UI SC Italic)')
make_font('SemiBold', False, 'Zhudou Sans Bold.ttf', 'FiraGO-SemiBold.otf', 'sarasa-semibold.ttc(Sarasa UI SC Semibold)')
make_font('SemiBold', True, 'Zhudou Sans Bold.ttf', 'FiraGO-SemiBoldItalic.otf', 'sarasa-semibolditalic.ttc(Sarasa UI SC Semibold Italic)')
make_font('Bold', False, 'Zhudou Sans Bold.ttf', 'FiraGO-Bold.otf', 'sarasa-bold.ttc(Sarasa UI SC Bold)')
make_font('Bold', True, 'Zhudou Sans Bold.ttf', 'FiraGO-BoldItalic.otf', 'sarasa-bolditalic.ttc(Sarasa UI SC Bold Italic)')
