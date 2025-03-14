.SILENT:

all: svg

svg: svg-dagre svg-elk

svg-dagre:
	sed -Ei 's,^( *layout:).*$$,\1 dagre,' *.mmd
	ls -1 *.mmd | sed 's,\..*$$,,' | xargs -P12 -I% mmdc --input %.mmd --backgroundColor transparent --output %.dagre.svg

svg-elk:
	sed -Ei 's,^( *layout:).*$$,\1 elk,' *.mmd
	ls -1 *.mmd | sed 's,\..*$$,,' | xargs -P12 -I% mmdc --input %.mmd --backgroundColor transparent --output %.elk.svg

clean:
	rm -f *.svg
