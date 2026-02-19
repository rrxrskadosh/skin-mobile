(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer","this.veilPopupPanorama","this.zoomImagePopupPanorama","this.closeButtonPopupPanorama"],"hash": "3ceac11169fe5138174eee265ba0d00d525d36d1fadd7f1670f78a8aae3bb75b", "definitions": [{"id":"ImageResource_643E478A_731C_73BF_41D4_251B0D0AE2D3","class":"ImageResource","levels":["this.imlevel_65D183C8_731C_73BA_41C1_099A4FB7C67D"]},{"arrowKeysAction":"translate","viewerArea":"this.MainViewer","class":"PanoramaPlayer","displayPlaybackBar":true,"keepModel3DLoadedWithoutLocation":true,"touchControlMode":"drag_rotation","aaEnabled":true,"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation"},{"id":"FadeInEffect_7CE8F755_6DA1_D676_41CC_D2D4CE4EA423","class":"FadeInEffect","easing":"cubic_in_out"},{"id":"album_63FFE386_6D5F_CED2_41A0_47A58FF3ED8C","playList":"this.album_63FFE386_6D5F_CED2_41A0_47A58FF3ED8C_AlbumPlayList","data":{"label":"Mapa M\u00e9xico"},"class":"PhotoAlbum","label":trans('album_63FFE386_6D5F_CED2_41A0_47A58FF3ED8C.label'),"thumbnailUrl":"media/album_63FFE386_6D5F_CED2_41A0_47A58FF3ED8C_t.png"},{"partial":true,"hfovMin":"150%","overlays":["this.overlay_66C83AEA_732C_7D72_41CC_0FE1F8A3D852","this.overlay_64E441AB_732C_6FFD_41BC_5E4FAAB242A0","this.overlay_64946ED4_732B_D5AA_41D2_474ACA15A70C","this.popup_6467B73F_7324_F4D5_41B2_965BFE9F5F29","this.popup_6B3932F4_731D_AD6B_41DA_FABF10A8B41D","this.popup_648B99FD_731C_FF55_41B6_117006D1CB09","this.overlay_6B5D22B3_7365_ADEE_41C0_3E5775210A29","this.popup_643DE01D_7364_ECD5_41D4_1309DC20C98E"],"thumbnailUrl":"media/panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_t.webp","vfov":1.58,"hfov":90,"data":{"label":"canc\u00fan-points"},"id":"panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356","frames":[{"cube":{"class":"ImageResource","levels":[{"rowCount":4,"height":2048,"url":"media/panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_0/{face}/0/{row}_{column}.webp","colCount":24,"width":12288,"tags":"ondemand","class":"TiledImageResourceLevel"},{"rowCount":2,"height":1024,"url":"media/panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_0/{face}/1/{row}_{column}.webp","colCount":12,"width":6144,"tags":"ondemand","class":"TiledImageResourceLevel"},{"rowCount":1,"height":512,"url":"media/panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_0/{face}/2/{row}_{column}.webp","colCount":6,"width":3072,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_t.webp"}],"class":"Panorama","label":trans('panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356.label'),"hfovMax":90},{"pitch":0.36,"showEasing":"cubic_in","yaw":0.01,"hfov":0.23,"popupDistance":100,"class":"PopupPanoramaOverlay","showDuration":500,"popupMaxHeight":"95%","popupMaxWidth":"95%","id":"popup_6B3932F4_731D_AD6B_41DA_FABF10A8B41D","image":"this.ImageResource_6403178E_731C_73B7_41DC_38BF16B57DC3","hideEasing":"cubic_out","hideDuration":500},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":-43.86},"id":"panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_camera","enterPointingToHorizon":true,"class":"PanoramaCamera"},{"id":"MainViewerPhotoAlbumPlayer","viewerArea":"this.MainViewer","class":"PhotoAlbumPlayer"},{"width":"100%","toolTipPaddingRight":6,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowOpacity":0.7,"toolTipFontFamily":"Arial","subtitlesTextShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"subtitlesTop":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesBottom":50,"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"progressBackgroundColorRatios":[0],"playbackBarProgressBorderColor":"#000000","toolTipBorderColor":"#767676","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderRadius":0,"toolTipPaddingTop":4,"toolTipPaddingBottom":4,"progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","playbackBarHeadBorderColor":"#000000","progressOpacity":0.7,"data":{"name":"Main Viewer"},"subtitlesBorderColor":"#FFFFFF","progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"playbackBarBorderSize":0,"subtitlesFontFamily":"Arial","progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadShadowBlurRadius":3,"vrThumbstickRotationStep":20,"playbackBarLeft":0,"surfaceReticleColor":"#FFFFFF","progressBackgroundColor":["#000000"],"subtitlesGap":0,"playbackBarBackgroundOpacity":1,"playbackBarHeadHeight":15,"playbackBarHeadBorderSize":0,"toolTipFontSize":"1.11vmin","progressBottom":10,"propagateClick":false,"id":"MainViewer","playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"progressHeight":2,"toolTipShadowColor":"#333138","subtitlesBackgroundColor":"#000000","firstTransitionDuration":0,"playbackBarHeadShadow":true,"vrPointerSelectionColor":"#FF6600","progressBorderSize":0,"progressBarBorderSize":0,"progressBarBorderRadius":2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"vrPointerColor":"#FFFFFF","minHeight":50,"vrPointerSelectionTime":2000,"minWidth":100,"toolTipTextShadowColor":"#000000","subtitlesTextShadowOpacity":1,"progressLeft":"33%","toolTipFontColor":"#606060","playbackBarBackgroundColor":["#FFFFFF"],"progressBorderRadius":2,"playbackBarHeight":10,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","height":"100%","subtitlesFontColor":"#FFFFFF","playbackBarRight":0,"class":"ViewerArea","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadWidth":6,"playbackBarProgressBorderRadius":0,"toolTipPaddingLeft":6},{"id":"ImageResource_6B53F625_737C_D4EA_41C8_6DB4C643F394","class":"ImageResource","levels":["this.imlevel_6B7FD2FF_737C_ED55_41C2_962E168D4B9C"]},{"data":{"label":"mapa-mexico-vertical"},"height":1935,"duration":3000,"class":"Photo","label":trans('photo_7BB37E40_6DDE_364E_41D9_F248E0B07D0C.label'),"id":"photo_7BB37E40_6DDE_364E_41D9_F248E0B07D0C","image":{"class":"ImageResource","levels":[{"url":"media/photo_7BB37E40_6DDE_364E_41D9_F248E0B07D0C.webp","class":"ImageResourceLevel"}]},"width":1069,"thumbnailUrl":"media/photo_7BB37E40_6DDE_364E_41D9_F248E0B07D0C_t.webp"},{"id":"ImageResource_6403178E_731C_73B7_41DC_38BF16B57DC3","class":"ImageResource","levels":["this.imlevel_65D103D9_731C_735D_41B4_0B53D3A79F5E"]},{"pitch":0.33,"showEasing":"cubic_in","yaw":22.5,"hfov":0.23,"popupDistance":100,"class":"PopupPanoramaOverlay","showDuration":500,"popupMaxHeight":"95%","popupMaxWidth":"95%","id":"popup_648B99FD_731C_FF55_41B6_117006D1CB09","image":"this.ImageResource_6402B78E_731C_73B7_41CC_D30EB339B51D","hideEasing":"cubic_out","hideDuration":500},{"id":"ImageResource_6402B78E_731C_73B7_41CC_D30EB339B51D","class":"ImageResource","levels":["this.imlevel_65D0F3EA_731C_737F_41B0_2C48E6936754"]},{"playList":"this.album_608C4D4F_6D5E_3A52_41D0_D0093A70F70F_AlbumPlayList","data":{"label":"Mapa Mundi"},"class":"PhotoAlbum","label":trans('album_608C4D4F_6D5E_3A52_41D0_D0093A70F70F.label'),"id":"album_608C4D4F_6D5E_3A52_41D0_D0093A70F70F","thumbnailUrl":"media/album_608C4D4F_6D5E_3A52_41D0_D0093A70F70F_t.png"},{"id":"FadeOutEffect_7CE8E754_6DA1_D676_41CE_3F7E62430F97","class":"FadeOutEffect","easing":"cubic_in_out"},{"id":"mainPlayList","items":[{"begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.album_608C4D4F_6D5E_3A52_41D0_D0093A70F70F","class":"PhotoAlbumPlayListItem","player":"this.MainViewerPhotoAlbumPlayer"},{"begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","media":"this.album_63FFE386_6D5F_CED2_41A0_47A58FF3ED8C","class":"PhotoAlbumPlayListItem","player":"this.MainViewerPhotoAlbumPlayer"},{"camera":"this.panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_camera","media":"this.panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"pitch":0.23,"showEasing":"cubic_in","yaw":41.37,"hfov":0.23,"popupDistance":100,"class":"PopupPanoramaOverlay","showDuration":500,"popupMaxHeight":"95%","popupMaxWidth":"95%","id":"popup_643DE01D_7364_ECD5_41D4_1309DC20C98E","image":"this.ImageResource_6B53F625_737C_D4EA_41C8_6DB4C643F394","hideEasing":"cubic_out","hideDuration":500},{"pitch":0.37,"showEasing":"cubic_in","yaw":-22.5,"hfov":0.23,"popupDistance":100,"class":"PopupPanoramaOverlay","showDuration":500,"popupMaxHeight":"95%","popupMaxWidth":"95%","id":"popup_6467B73F_7324_F4D5_41B2_965BFE9F5F29","image":"this.ImageResource_643E478A_731C_73BF_41D4_251B0D0AE2D3","hideEasing":"cubic_out","hideDuration":500},{"data":{"label":"mapa-mundi-vertical"},"height":1927,"duration":3000,"class":"Photo","label":trans('photo_78F6D630_6DDF_C9CE_41A3_3E7AA1A5A97A.label'),"id":"photo_78F6D630_6DDF_C9CE_41A3_3E7AA1A5A97A","image":{"class":"ImageResource","levels":[{"url":"media/photo_78F6D630_6DDF_C9CE_41A3_3E7AA1A5A97A.webp","class":"ImageResourceLevel"}]},"width":1079,"thumbnailUrl":"media/photo_78F6D630_6DDF_C9CE_41A3_3E7AA1A5A97A_t.webp"},{"propagateClick":false,"id":"veilPopupPanorama","left":0,"backgroundColor":["#000000"],"data":{"name":"UIComponent35406"},"right":0,"minHeight":0,"minWidth":0,"top":0,"bottom":0,"backgroundColorRatios":[0],"class":"UIComponent","visible":false,"backgroundOpacity":0.55,"showEffect":{"duration":350,"class":"FadeInEffect","easing":"cubic_in_out"}},{"propagateClick":false,"id":"zoomImagePopupPanorama","left":0,"backgroundColor":[],"data":{"name":"ZoomImage35407"},"right":0,"minHeight":0,"minWidth":0,"top":0,"bottom":0,"backgroundColorRatios":[],"scaleMode":"custom","class":"ZoomImage","visible":false},{"rollOverIconColor":"#666666","propagateClick":false,"id":"closeButtonPopupPanorama","iconLineWidth":2,"backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"fontColor":"#FFFFFF","fontFamily":"Arial","fontSize":"1.29vmin","data":{"name":"CloseButton35408"},"right":10,"layout":"horizontal","tabIndex":0,"iconWidth":"100%","pressedIconColor":"#888888","minHeight":0,"minWidth":0,"top":10,"backgroundColorRatios":[0,0.09803921568627451,1],"iconHeight":"100%","borderColor":"#000000","class":"CloseButton","visible":false,"iconColor":"#000000","showEffect":{"duration":350,"class":"FadeInEffect","easing":"cubic_in_out"}},{"height":512,"url":trans('imlevel_65D183C8_731C_73BA_41C1_099A4FB7C67D.url'),"width":512,"id":"imlevel_65D183C8_731C_73BA_41C1_099A4FB7C67D","class":"ImageResourceLevel"},{"id":"album_63FFE386_6D5F_CED2_41A0_47A58FF3ED8C_AlbumPlayList","items":[{"camera":{"initialPosition":{"y":0.63,"zoomFactor":1.1,"x":0.62,"class":"PhotoCameraPosition"},"duration":3000,"targetPosition":{"class":"PhotoCameraPosition"},"scaleMode":"fit_outside","class":"MovementPhotoCamera"},"media":"this.photo_7BB37E40_6DDE_364E_41D9_F248E0B07D0C","class":"PhotoPlayListItem"}],"class":"PhotoPlayList"},{"maps":[],"enabled":false,"items":[{"pitch":0.37,"vfov":0.23,"yaw":-22.5,"data":{"label":"Restaurante Tai Canc\u00fan"},"hfov":0.23,"distance":50,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","image":"this.res_65C5FE9C_731C_55DB_41BC_B054578C5F04"}],"areas":["this.HotspotPanoramaOverlayArea_66DC5C2E_732C_74F7_41CC_39ED8643449A"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_66C83AEA_732C_7D72_41CC_0FE1F8A3D852","enabledInCardboard":true,"data":{"label":"Restaurante Tai Cancún"}},{"maps":[],"enabled":false,"items":[{"pitch":0.36,"vfov":0.23,"yaw":0.01,"data":{"label":"Hotel Presidente Intercontinental Canc\u00fan 1"},"hfov":0.23,"distance":50,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","image":"this.res_65C4DEA2_731C_55EE_419F_2E8C25A00E5C"}],"areas":["this.HotspotPanoramaOverlayArea_6B1271C9_732C_6FBA_41B6_5DCC782BDC09"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_64E441AB_732C_6FFD_41BC_5E4FAAB242A0","enabledInCardboard":true,"data":{"label":"Hotel Presidente Intercontinental Cancún 1"}},{"maps":[],"enabled":false,"items":[{"pitch":0.33,"vfov":0.23,"yaw":22.5,"data":{"label":"Restaurante Parole Canc\u00fan"},"hfov":0.23,"distance":50,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","image":"this.res_65C5FE9C_731C_55DB_41BC_B054578C5F04"}],"areas":["this.HotspotPanoramaOverlayArea_64970EDF_732B_D555_41C2_8F7F756CC146"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_64946ED4_732B_D5AA_41D2_474ACA15A70C","enabledInCardboard":true,"data":{"label":"Restaurante Parole Cancún"}},{"maps":[],"enabled":false,"items":[{"pitch":0.23,"vfov":0.23,"yaw":41.37,"data":{"label":"Hotel Hawen Riviera Canc\u00fan"},"hfov":0.23,"distance":50,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","image":"this.res_65C4DEA2_731C_55EE_419F_2E8C25A00E5C"}],"areas":["this.HotspotPanoramaOverlayArea_6B5E72BE_7365_ADD7_41BC_35E8109E89BA"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_6B5D22B3_7365_ADEE_41C0_3E5775210A29","enabledInCardboard":true,"data":{"label":"Hotel Hawen Riviera Cancún"}},{"height":384,"url":trans('imlevel_6B7FD2FF_737C_ED55_41C2_962E168D4B9C.url'),"width":512,"id":"imlevel_6B7FD2FF_737C_ED55_41C2_962E168D4B9C","class":"ImageResourceLevel"},{"height":415,"url":trans('imlevel_65D103D9_731C_735D_41B4_0B53D3A79F5E.url'),"width":512,"id":"imlevel_65D103D9_731C_735D_41B4_0B53D3A79F5E","class":"ImageResourceLevel"},{"height":512,"url":trans('imlevel_65D0F3EA_731C_737F_41B0_2C48E6936754.url'),"width":512,"id":"imlevel_65D0F3EA_731C_737F_41B0_2C48E6936754","class":"ImageResourceLevel"},{"id":"album_608C4D4F_6D5E_3A52_41D0_D0093A70F70F_AlbumPlayList","items":[{"camera":{"initialPosition":{"y":0.34,"zoomFactor":1.1,"x":0.61,"class":"PhotoCameraPosition"},"duration":3000,"targetPosition":{"class":"PhotoCameraPosition"},"scaleMode":"fit_outside","class":"MovementPhotoCamera"},"media":"this.photo_78F6D630_6DDF_C9CE_41A3_3E7AA1A5A97A","class":"PhotoPlayListItem"}],"class":"PhotoPlayList"},{"id":"res_65C5FE9C_731C_55DB_41BC_B054578C5F04","class":"ImageResource","levels":[{"height":10,"url":"media/res_65C5FE9C_731C_55DB_41BC_B054578C5F04_0.webp","width":10,"class":"ImageResourceLevel"}]},{"click":"this.showPopupPanoramaOverlay(this.popup_6467B73F_7324_F4D5_41B2_965BFE9F5F29,{'borderSize':0,'pressedIconHeight':20,'rollOverIconWidth':20,'pressedBorderSize':0,'rollOverIconLineWidth':2,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':1,'paddingBottom':5,'rollOverBackgroundOpacity':1,'paddingRight':5,'backgroundColorDirection':'vertical','iconLineWidth':2,'borderRadius':0,'rollOverBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':2,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'iconWidth':20,'pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':1,'rollOverBorderColor':'#000000','pressedBorderColor':'#000000','pressedIconColor':'#888888','iconHeight':20,'paddingLeft':5},this.ImageResource_643E478A_731C_73BF_41D4_251B0D0AE2D3,null,null,null,false)","id":"HotspotPanoramaOverlayArea_66DC5C2E_732C_74F7_41CC_39ED8643449A","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"res_65C4DEA2_731C_55EE_419F_2E8C25A00E5C","class":"ImageResource","levels":[{"height":10,"url":"media/res_65C4DEA2_731C_55EE_419F_2E8C25A00E5C_0.webp","width":10,"class":"ImageResourceLevel"}]},{"click":"this.showPopupPanoramaOverlay(this.popup_6B3932F4_731D_AD6B_41DA_FABF10A8B41D,{'borderSize':0,'pressedIconHeight':20,'rollOverIconWidth':20,'pressedBorderSize':0,'rollOverIconLineWidth':2,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':1,'paddingBottom':5,'rollOverBackgroundOpacity':1,'paddingRight':5,'backgroundColorDirection':'vertical','iconLineWidth':2,'borderRadius':0,'rollOverBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':2,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'iconWidth':20,'pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':1,'rollOverBorderColor':'#000000','pressedBorderColor':'#000000','pressedIconColor':'#888888','iconHeight':20,'paddingLeft':5},this.ImageResource_6403178E_731C_73B7_41DC_38BF16B57DC3,null,null,null,false)","id":"HotspotPanoramaOverlayArea_6B1271C9_732C_6FBA_41B6_5DCC782BDC09","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"click":"this.showPopupPanoramaOverlay(this.popup_648B99FD_731C_FF55_41B6_117006D1CB09,{'borderSize':0,'pressedIconHeight':20,'rollOverIconWidth':20,'pressedBorderSize':0,'rollOverIconLineWidth':2,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':1,'paddingBottom':5,'rollOverBackgroundOpacity':1,'paddingRight':5,'backgroundColorDirection':'vertical','iconLineWidth':2,'borderRadius':0,'rollOverBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':2,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'iconWidth':20,'pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':1,'rollOverBorderColor':'#000000','pressedBorderColor':'#000000','pressedIconColor':'#888888','iconHeight':20,'paddingLeft':5},this.ImageResource_6402B78E_731C_73B7_41CC_D30EB339B51D,null,null,null,false)","id":"HotspotPanoramaOverlayArea_64970EDF_732B_D555_41C2_8F7F756CC146","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"click":"this.showPopupPanoramaOverlay(this.popup_643DE01D_7364_ECD5_41D4_1309DC20C98E,{'borderSize':0,'pressedIconHeight':20,'rollOverIconWidth':20,'pressedBorderSize':0,'rollOverIconLineWidth':2,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':1,'paddingBottom':5,'rollOverBackgroundOpacity':1,'paddingRight':5,'backgroundColorDirection':'vertical','iconLineWidth':2,'borderRadius':0,'rollOverBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':2,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'iconWidth':20,'pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':1,'rollOverBorderColor':'#000000','pressedBorderColor':'#000000','pressedIconColor':'#888888','iconHeight':20,'paddingLeft':5},this.ImageResource_6B53F625_737C_D4EA_41C8_6DB4C643F394,null,null,null,false)","id":"HotspotPanoramaOverlayArea_6B5E72BE_7365_ADD7_41BC_35E8109E89BA","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"}],"propagateClick":false,"id":"rootPlayer","data":{"locales":{"en":"locale/en.txt"},"history":{},"displayTooltipInTouchScreens":true,"name":"Player568","defaultLocale":"en","textToSpeechConfig":{"pitch":1,"volume":1,"rate":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"speechOnQuizQuestion":false}},"backgroundColor":["#FFFFFF"],"scrollBarMargin":2,"layout":"absolute","left":447.5,"defaultMenu":["fullscreen","mute","rotation"],"minHeight":0,"minWidth":0,"gap":10,"scrollBarColor":"#000000","scripts":{"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"historyGoBack":TDV.Tour.Script.historyGoBack,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"clone":TDV.Tour.Script.clone,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizStart":TDV.Tour.Script.quizStart,"resumePlayers":TDV.Tour.Script.resumePlayers,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"showPopupImage":TDV.Tour.Script.showPopupImage,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setValue":TDV.Tour.Script.setValue,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"openLink":TDV.Tour.Script.openLink,"executeJS":TDV.Tour.Script.executeJS,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"getPixels":TDV.Tour.Script.getPixels,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showWindow":TDV.Tour.Script.showWindow,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getOverlays":TDV.Tour.Script.getOverlays,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"historyGoForward":TDV.Tour.Script.historyGoForward,"mixObject":TDV.Tour.Script.mixObject,"downloadFile":TDV.Tour.Script.downloadFile,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getKey":TDV.Tour.Script.getKey,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"quizFinish":TDV.Tour.Script.quizFinish,"isPanorama":TDV.Tour.Script.isPanorama,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"init":TDV.Tour.Script.init,"playAudioList":TDV.Tour.Script.playAudioList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"cloneBindings":TDV.Tour.Script.cloneBindings,"getMainViewer":TDV.Tour.Script.getMainViewer,"getComponentByName":TDV.Tour.Script.getComponentByName,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"registerKey":TDV.Tour.Script.registerKey,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"disableVR":TDV.Tour.Script.disableVR,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaByName":TDV.Tour.Script.getMediaByName,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"enableVR":TDV.Tour.Script.enableVR,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"textToSpeech":TDV.Tour.Script.textToSpeech,"createTween":TDV.Tour.Script.createTween,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"initQuiz":TDV.Tour.Script.initQuiz,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"shareSocial":TDV.Tour.Script.shareSocial,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"translate":TDV.Tour.Script.translate,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"existsKey":TDV.Tour.Script.existsKey,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"quizShowScore":TDV.Tour.Script.quizShowScore,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setLocale":TDV.Tour.Script.setLocale,"startMeasurement":TDV.Tour.Script.startMeasurement,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"toggleVR":TDV.Tour.Script.toggleVR,"takeScreenshot":TDV.Tour.Script.takeScreenshot},"height":"100%","backgroundColorRatios":[0],"start":"this.init()","width":"100%","class":"Player","downloadEnabled":true};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.2.10, Wed Feb 18 2026