#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sys
import fontforge
import chws_tool

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
    Portions Copyright (c) 2014, 2015 Adobe Systems Incorporated (http://www.adobe.com/). Portions Copyright (c) 2012 Google Inc.
    '''

def output_pdf(font, text, file_name):
    fontforge.printSetup("pdf-file")
    font.printSample("fontsample", 20, text, file_name)

def duplicate_lookup(font, old, new):
    names = list(filter(lambda x: x.startswith("'" + old + "'"), font.gpos_lookups))
    assert len(names) > 0
    for name in names:
        info = list(font.getLookupInfo(name))
        feats = list(info[2])
        lang = list(filter(lambda x: x[0]==old, feats))[0][1]
        feats.append((new, lang))
        font.lookupSetFeatureList(name, tuple(feats))

def remove_feature(font, lookups, name):
    for lookup in filter(lambda x:x.startswith("'" + name + "'"), lookups):
        for subtable in font.getLookupSubtables(lookup)[:]:
            font.removeLookupSubtable(subtable, 1)
        font.removeLookup(lookup, 1)

def freezen_zero(font):
    for zero_variant in list(filter(lambda x:x.glyphname.endswith('.zero'), font.glyphs())):
        sel=font.selection.byGlyphs
        sel.select(zero_variant.glyphname[:-len('.zero')])
        non_zero_variant = list(sel)[0]
        sel.none()
        zero_variant.unicode = non_zero_variant.unicode
        zero_variant.glyphname = non_zero_variant.glyphname
        font.removeGlyph(non_zero_variant)

def make_font(weight, is_italic, s_file):
    font=fontforge.open(s_file)
    set_font_info(font, is_italic, weight)

    # duplicate_lookup(font, 'chws', 'kern')
    remove_feature(font, font.gpos_lookups, 'palt')
    remove_feature(font, font.gpos_lookups, 'vpal')

    freezen_zero(font)
    remove_feature(font, font.gsub_lookups, 'zero')

    # output_pdf(font, "０ 012 VAWA 测试：「Test」（Kern）．", 'a.pdf')
    output_name = 'RedFishSans-%s.otf' % (weight+('Italic' if is_italic else ''))
    font.generate(output_name)
    chws_tool.add_chws('RedFishSans-%s.otf' % (weight+('Italic' if is_italic else '')))

    font.close()

def main():
    make_font(sys.argv[1], bool(int(sys.argv[2])), sys.argv[3])

if __name__ == '__main__':
    main()
