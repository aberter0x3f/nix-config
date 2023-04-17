#!/usr/bin/env fontforge
# -*- coding: utf-8 -*-

import sys
import fontforge

def set_font_info(font, is_italic, weight):
    font.sfnt_names = ()
    font.fontname="RedFishSans-"+weight+('Italic' if is_italic else '')
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
    font=fontforge.open(fs_file)
    set_font_info(font, is_italic, weight)

    zd_name = fontforge.open(zd_file).fontname
    font.mergeFonts(zd_file)

    #duplicate_lookup(font, zd_name + '-', 'chws', 'kern')
    remove_feature(font, zd_name + '-', 'locl')

    s_name = fontforge.open(s_file).fontname
    font.mergeFonts(s_file)
    remove_feature(font, s_name, 'locl')

    freezen_zero(font)
    remove_feature(font, zd_name + '-', 'zero')
    remove_feature(font, '', 'zero')
    remove_feature(font, s_name + '-', 'zero')

    # output_pdf(font, "０ 012 VAWA 测试：「Test」（Kern）．", 'a.pdf')
    font.generate('RedFish-Sans-%s.otf' % (weight+('Italic' if is_italic else '')))

make_font(sys.argv[1], bool(int(sys.argv[2])), sys.argv[3], sys.argv[4], sys.argv[5])
